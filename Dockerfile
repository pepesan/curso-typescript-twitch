# syntax=docker/dockerfile:1

# Versiones fijadas (últimas publicadas en Docker Hub). Se pueden sobrescribir con --build-arg.
ARG NODE_VERSION=26.13.1-alpine3.24
ARG NGINX_VERSION=1.31.7-alpine3.24

# ---- Etapa 1: instalar dependencias y compilar la aplicación ----
FROM node:${NODE_VERSION} AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .
RUN npm run build

# ---- Etapa 2: servir los estáticos con nginx sin privilegios ----
# La imagen nginxinc/nginx-unprivileged ejecuta nginx como usuario 101 (no root)
# y escucha en el puerto 8080 (los puertos < 1024 requieren root).
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runtime

COPY --from=build /app/dist/ /usr/share/nginx/html/

USER 101
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
