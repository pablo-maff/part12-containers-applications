FROM node:20 AS build-stage
WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL="http://host.docker.internal:3001/" CI="TRUE"

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
