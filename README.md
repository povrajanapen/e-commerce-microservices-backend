# E-commerce Backend (Node.js + Express + MongoDB)

This folder contains three small services used by the Next.js frontend:

- User service (port 3001)
- Product service (port 3002)
- Order service (port 3003)

All services share a single MongoDB database, configured via `MONGODB_URI`.

## Setup

1. Go to the backend folder:

   cd backend

2. Install dependencies (using your preferred package manager):

   pnpm install
   # or
   npm install

3. Create a `.env` file:

   cp .env.example .env

   Then edit `.env` and set `MONGODB_URI` to your MongoDB connection string.

## Running the services

Development with auto-reload (nodemon):

- User service:

  pnpm run dev:user-service

- Product service:

  pnpm run dev:product-service

- Order service:

  pnpm run dev:order-service

Or without nodemon:

- User service: pnpm run user-service
- Product service: pnpm run product-service
- Order service: pnpm run order-service

## Frontend URLs

The current frontend calls these URLs:

- Users: http://user-service:3001/users
- Products: http://product-service:3002/products
- Orders: http://order-service:3003/orders

For local development without Docker or custom hostnames, you can update the frontend to use `http://localhost:<port>` instead, for example:

- http://localhost:3001/users
- http://localhost:3002/products
- http://localhost:3003/orders

The response shapes match what the frontend expects:

- User: `{ _id, name, email }`
- Product: `{ _id, title, author, price }`
- Order: `{ _id, userId, productId, quantity }`
