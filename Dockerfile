# ---- Stage 1: build ----
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json ./
RUN npm install --no-audit --no-fund

COPY tsconfig.json tsconfig.app.json angular.json tailwind.config.js postcss.config.js ./
COPY src ./src
COPY public ./public

RUN npx ng build --configuration production

# ---- Stage 2: serve ----
FROM nginx:1.27-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/eztrove/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
