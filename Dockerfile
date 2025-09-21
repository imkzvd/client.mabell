FROM node:22-alpine AS build-stage
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build-stage /build/package*.json ./
COPY --from=build-stage /build/.output ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]