FROM node:alpine
RUN apk add  --no-cache ffmpeg
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
