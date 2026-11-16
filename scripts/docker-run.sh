#!/usr/bin/env bash
# Lanza la imagen en local (en segundo plano) para probarla y muestra al final la URL donde entrar.
#
# Uso:
#   scripts/docker-run.sh [TAG]
#
# Variables opcionales:
#   DOCKER_USER  Usuario de Docker Hub (por defecto: pepesan)
#   IMAGE_NAME   Nombre del repositorio (por defecto: curso-typescript-twitch)
#   HOST_PORT    Puerto del host a usar (por defecto: uno libre asignado por Docker)
#   CONTAINER    Nombre del contenedor (por defecto: curso-typescript-twitch-local)
#
# Si ya existe un contenedor con ese nombre se elimina antes de lanzar el nuevo.
set -euo pipefail

cd "$(dirname "$0")/.."

DOCKER_USER="${DOCKER_USER:-pepesan}"
IMAGE_NAME="${IMAGE_NAME:-curso-typescript-twitch}"
IMAGE="${DOCKER_USER}/${IMAGE_NAME}"
CONTAINER="${CONTAINER:-curso-typescript-twitch-local}"
HOST_PORT="${HOST_PORT:-}"

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

# Sustituye un contenedor de pruebas anterior con el mismo nombre
if docker container inspect "${CONTAINER}" >/dev/null 2>&1; then
  echo ">> Eliminando contenedor anterior ${CONTAINER}"
  docker rm -f "${CONTAINER}" >/dev/null
fi

# Solo escucha en localhost; el puerto del host es el indicado o uno libre asignado por Docker
BIND="127.0.0.1:${HOST_PORT}"
echo ">> Arrancando ${CONTAINER} desde ${IMAGE}:${TAG}"
docker run -d \
  --name "${CONTAINER}" \
  --read-only \
  --tmpfs /tmp \
  --tmpfs /var/cache/nginx \
  --tmpfs /var/run \
  --cap-drop ALL \
  --security-opt no-new-privileges:true \
  -p "${BIND}:8080" \
  "${IMAGE}:${TAG}" >/dev/null

# Obtiene el puerto real publicado en el host
PUBLISHED="$(docker port "${CONTAINER}" 8080/tcp | head -n1 | awk -F: '{print $NF}')"

echo ">> Esperando a que nginx responda..."
for _ in $(seq 1 20); do
  if curl -fsS -o /dev/null "http://127.0.0.1:${PUBLISHED}/" 2>/dev/null; then
    break
  fi
  sleep 0.5
done

echo
echo "============================================================"
echo " Contenedor: ${CONTAINER}"
echo " Puerto:     ${PUBLISHED}"
echo " Abre:       http://localhost:${PUBLISHED}/"
echo " Logs:       docker logs -f ${CONTAINER}"
echo " Parar:      docker rm -f ${CONTAINER}"
echo "============================================================"
