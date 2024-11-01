# 💼 AI Financial Analysis Crew

## 🚀 Overview
AI Financial Analysis Crew is a modern web application featuring autonomous AI agents that work together to deliver comprehensive financial analysis. The system leverages CrewAI to coordinate multiple AI agents that research, analyze, and generate detailed financial reports by collecting real-time data from various internet sources.

## 🤖 System Architecture
- **Frontend**: React + TypeScript + Chakra UI
- **Backend**: Node.js + Express
- **AI Engine**: CrewAI + OpenAI GPT-4
- **Deployment**: Railway + Docker

## 📁 Project Structure
```
crewai-financial-assistant-web/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AnalysisForm.tsx    # Analysis input form
│   │   │   ├── Header.tsx          # Application header
│   │   │   ├── ResultDisplay.tsx   # Analysis results display
│   │   │   └── StatusDisplay.tsx   # Agent status indicators
│   │   ├── App.tsx                 # Main application component
│   │   └── index.tsx               # Application entry point
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── app.js                  # Express application setup
│   │   └── routes/
│   │       └── health.js           # Health check endpoint
│   └── package.json
├── Dockerfile                      # Multi-stage build configuration
└── railway.toml                    # Railway deployment configuration
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker (optional)

### Backend Setup
1. Clone the repository:
```bash
git clone https://github.com/yourusername/crewai-financial-assistant-web.git
cd crewai-financial-assistant-web/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
OPENAI_API_KEY=your_openai_api_key
SERPER_API_KEY=your_serper_api_key
OPENAI_MODEL_NAME=gpt-4o-mini
PORT=3001
```

### Frontend Setup
1. Navigate to frontend directory:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

### Running Backend
```bash
cd backend
npm run dev    # Runs with nodemon for development
# or
npm start      # Runs without hot reload
```

### Running Frontend
```bash
cd frontend
npm start      # Starts development server on port 3000
```

## 📊 Features in Detail

### AI Agents
1. **Researcher**: 
   - Gathers financial data from multiple sources
   - Collects market information and news
   - Analyzes company documents

2. **Analyst**:
   - Processes collected data
   - Performs financial analysis
   - Identifies trends and patterns

3. **Report Writer**:
   - Generates comprehensive reports
   - Creates executive summaries
   - Provides actionable insights

## 🔌 API Endpoints

### Health Check
```
GET /api/health
Response: { status: 'healthy' }
```

### Analysis
```
POST /api/analyze
Body: {
  topic: string,          // e.g., "Apple Inc. Quarterly Performance"
  financial_period: string, // e.g., "Q4 2023"
  focus_areas: string,    // e.g., "Revenue Growth, Market Share"
  objectives: string      // e.g., "Assess financial health"
}
```

## 🚢 Deployment
The application is configured for deployment on Railway:
- Multi-stage Docker builds for optimized images
- Automated health checks
- Environment variable management
- Continuous deployment from main branch

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.