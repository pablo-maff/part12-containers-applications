FROM node:22-bookworm AS build-stage

RUN npx -y playwright@1.44.1 install --with-deps

WORKDIR /usr/src/app

COPY . .

RUN npm ci --include=dev

ENV VITE_BACKEND_URL="http://host.docker.internal:3001" \
    CI="TRUE"

RUN npm run test

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
