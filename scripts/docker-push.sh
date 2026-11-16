#!/usr/bin/env bash
# Sube a Docker Hub las etiquetas de la imagen construida por docker-build.sh.
#
# Uso:
#   scripts/docker-push.sh [TAG]
#
# Requiere haber hecho previamente `docker login` (las credenciales no se guardan aquí).
# Variables opcionales: DOCKER_USER, IMAGE_NAME (mismas que docker-build.sh).
set -euo pipefail

cd "$(dirname "$0")/.."

DOCKER_USER="${DOCKER_USER:-pepesan}"
IMAGE_NAME="${IMAGE_NAME:-curso-typescript-twitch}"
IMAGE="${DOCKER_USER}/${IMAGE_NAME}"

TAG="${1:-}"
if [[ -z "${TAG}" ]]; then
  TAG="$(git rev-parse --short HEAD 2>/dev/null || echo dev)"
  if [[ -n "$(git status --porcelain 2>/dev/null)" ]]; then
    TAG="${TAG}-dirty"
  fi
fi

if ! docker image inspect "${IMAGE}:${TAG}" >/dev/null 2>&1; then
  echo "error: la imagen ${IMAGE}:${TAG} no existe. Ejecuta antes scripts/docker-build.sh ${TAG}" >&2
  exit 1
fi

echo ">> Subiendo ${IMAGE}:${TAG}"
docker push "${IMAGE}:${TAG}"

echo ">> Subiendo ${IMAGE}:latest"
docker push "${IMAGE}:latest"

echo ">> Publicado: https://hub.docker.com/r/${IMAGE}"
