FROM node:18 AS builder

#WORKDIR /app

COPY client/ .
# install node modules and build assets

WORKDIR /app

RUN npm install

RUN npm run build

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
