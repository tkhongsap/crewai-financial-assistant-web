# AI Financial Analysis Crew - Backend

## Overview
Backend service for the AI Financial Analysis Crew application. Handles API requests, AI agent coordination, and data processing.

## Tech Stack
- Node.js
- Express
- OpenAI GPT-4
- CrewAI

## Setup
1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:
```bash
OPENAI_API_KEY=your_openai_api_key
SERPER_API_KEY=your_serper_api_key
OPENAI_MODEL_NAME=your_preferred_model
```

3. Start development server:
```bash
npm run dev
```

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server health status.

### Analysis
```
POST /api/analyze
```
Performs financial analysis based on provided parameters:
- topic
- financial_period
- focus_areas
- objectives

## Deployment
The backend is configured for deployment on Railway using Docker. The deployment process is automated through the Dockerfile and railway.toml configuration.

## Development
- Use `npm run dev` for development with hot-reload
- Use `npm start` for production

## Contributing
Please refer to the main README.md for contribution guidelines.
