FROM node:16

WORKDIR /app

# Copy root package.json and install dependencies for all services
COPY package*.json ./
RUN npm install

# Copy the rest of the backend source (node_modules is ignored by .dockerignore)
COPY . .

# Switch to this service's folder as the working directory
WORKDIR /app/services/auth-service

EXPOSE 3004

CMD ["node", "index.js"]
