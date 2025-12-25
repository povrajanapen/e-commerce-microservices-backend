# Dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /app/services/product-service

EXPOSE 3002

CMD ["node", "index.js"]