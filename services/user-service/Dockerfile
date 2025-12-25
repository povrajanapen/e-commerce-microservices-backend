# Dockerfile
FROM node:16

WORKDIR /app

# Copy root package.json and install dependencies for all services
COPY package*.json ./
RUN npm install

# Copy only the source code (thanks to .dockerignore we skip node_modules)
COPY . .

# Switch to this service's folder as the working directory
WORKDIR /app/services/user-service

EXPOSE 3001

CMD ["node", "index.js"]