# Install openssl explicitly for prisma
FROM node:20-bookworm-slim AS base-with-openssl
RUN apt-get update \
	&& apt-get install -y --no-install-recommends openssl \
	&& rm -rf /var/lib/apt/lists/*

FROM base-with-openssl AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install

# COPY prisma ./prisma
COPY . .

# RUN npx prisma generate

CMD ["npm", "run", "start:dev"]


# Development dependencies stage
FROM node:20-bookworm-slim AS dev-deps
WORKDIR /app
COPY package*.json ./
RUN npm install


# Builder stage
FROM node:20-bookworm-slim AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build


# Production dependencies stage
FROM node:20-bookworm-slim AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev


# Production stage
FROM base-with-openssl AS prod
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
# COPY prisma ./prisma
COPY package*.json ./

# Generate Prisma client for production
# RUN npx prisma generate

# Expose the port the app runs on
EXPOSE 3000

CMD ["npm", "run", "start:prod"]