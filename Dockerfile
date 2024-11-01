# Build frontend
FROM node:18-slim as frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Build backend
FROM node:18-slim
WORKDIR /app
COPY backend/package*.json ./
RUN npm install

# Copy backend files
COPY backend/ .

# Copy built frontend files
COPY --from=frontend-builder /app/frontend/build ./public

# Expose the port
EXPOSE 3001

# Start the application
CMD ["npm", "start"] 