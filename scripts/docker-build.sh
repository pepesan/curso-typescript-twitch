#!/usr/bin/env bash
# Construye la imagen de la aplicación.
#
# Uso:
#   scripts/docker-build.sh [TAG]
#
# Variables opcionales:
#   DOCKER_USER  Usuario de Docker Hub (por defecto: pepesan)
#   IMAGE_NAME   Nombre del repositorio (por defecto: curso-typescript-twitch)
#
# Si no se indica TAG se usa el hash corto de git (o "dev" fuera de git).
# Siempre se etiqueta también como :latest.
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

echo ">> Construyendo ${IMAGE}:${TAG} (y ${IMAGE}:latest)"
docker build \
  --file Dockerfile \
  --tag "${IMAGE}:${TAG}" \
  --tag "${IMAGE}:latest" \
  .

echo ">> Listo: ${IMAGE}:${TAG}"
