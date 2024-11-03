require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const { spawn } = require('child_process');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const app = express();

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// Parse JSON bodies
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public')));

// Enable CORS with specific options
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Root path handler
app.get('/', (req, res) => {
  res.send('Welcome to the AI Financial Analysis Crew API!');
});

// Analysis endpoint with Python CrewAI integration
app.post('/api/analyze', async (req, res) => {
  try {
    const { topic, financial_period, focus_areas, objectives } = req.body;
    
    if (!topic || !financial_period || !focus_areas || !objectives) {
      return res.status(400).json({
        status: 'error',
        detail: 'Missing required fields'
      });
    }

    const inputData = JSON.stringify({
      topic,
      financial_period,
      focus_areas,
      objectives
    }).replace(/"/g, '\\"'); // Escape quotes for command line

    const pythonScript = path.join(__dirname, '../src/crewai_financial_analyst/main.py');
    const command = `python "${pythonScript}" analyze "${inputData}"`;

    try {
      const { stdout, stderr } = await execPromise(command, {
        env: {
          ...process.env,
          PYTHONIOENCODING: 'utf-8',
          LANG: 'en_US.UTF-8'
        }
      });

      if (stderr) {
        console.error('Python stderr:', stderr);
      }

      const result = stdout.trim();
      try {
        const parsedResult = JSON.parse(result);
        res.json({
          status: 'success',
          result: parsedResult
        });
      } catch (parseError) {
        res.json({
          status: 'success',
          result: result
        });
      }
    } catch (execError) {
      console.error('Execution error:', execError);
      res.status(500).json({
        status: 'error',
        detail: execError.message
      });
    }
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ 
      status: 'error',
      detail: error.message || 'Internal server error'
    });
  }
});

// Get port from environment variable or use 3001 as fallback
const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
}); 