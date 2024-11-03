# Build frontend
FROM node:18-slim as frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Build backend with Python
FROM python:3.10-slim
WORKDIR /app

# Install Node.js
RUN apt-get update && apt-get install -y \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Copy backend files
COPY backend/package*.json ./
RUN npm install

COPY backend/ .

# Copy built frontend files
COPY --from=frontend-builder /app/frontend/build ./public

# Install Python dependencies
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Set environment variables
ENV NODE_ENV=production
ENV PYTHONPATH=/app/src

# Expose the port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]