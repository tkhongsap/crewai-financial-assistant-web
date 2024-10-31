from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel
from crewai_financial_analyst.crew import CrewaiFinancialAnalystCrew

app = FastAPI(
    title="CrewAI Financial Analyst API",
    description="API for financial analysis using CrewAI",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalysisRequest(BaseModel):
    topic: str
    financial_period: str
    focus_areas: str
    objectives: str

@app.get("/", response_class=HTMLResponse)
async def root():
    return """
    <html>
        <head>
            <title>CrewAI Financial Analyst API</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .endpoint { background: #f4f4f4; padding: 10px; margin: 10px 0; border-radius: 5px; }
            </style>
        </head>
        <body>
            <h1>CrewAI Financial Analyst API</h1>
            <p>Available endpoints:</p>
            <div class="endpoint">
                <h3>GET /api/health</h3>
                <p>Check API health status</p>
            </div>
            <div class="endpoint">
                <h3>POST /api/analyze</h3>
                <p>Run financial analysis</p>
            </div>
            <p>Visit <a href="/docs">/docs</a> for interactive API documentation</p>
        </body>
    </html>
    """

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "CrewAI Financial Analyst",
        "version": "1.0.0"
    }

@app.post("/api/analyze")
async def analyze_financial_data(request: AnalysisRequest):
    try:
        inputs = {
            'topic': request.topic,
            'financial_period': request.financial_period,
            'focus_areas': request.focus_areas,
            'objectives': request.objectives,
        }
        
        crew = CrewaiFinancialAnalystCrew()
        result = crew.crew().kickoff(inputs=inputs)
        
        # Extract the string result if it's a complex object
        if isinstance(result, dict):
            if 'raw' in result:
                result = result['raw']
            elif 'tasks_output' in result:
                result = str(result['tasks_output'])
        
        return {"status": "success", "result": str(result)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 