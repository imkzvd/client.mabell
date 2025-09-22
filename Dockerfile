FROM node:22-alpine AS build-stage
ARG API_URL
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
ENV VITE_API_URL=${API_URL}
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build-stage /build/package*.json ./
COPY --from=build-stage /build/.output ./.output
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["node", "/app/.output/server/index.mjs"]