# 💼 AI Financial Analysis Crew

## 🚀 Overview

AI Financial Analysis Crew is a sophisticated financial analysis tool powered by CrewAI that automates comprehensive financial report analysis. It employs multiple AI agents working in concert to research, analyze, and generate detailed financial reports.

## 🤖 Key Features

- **Automated Research**: Gathers and analyzes financial data from multiple sources
- **Intelligent Analysis**: Processes financial statements with focus on key metrics
- **Custom Reports**: Generates detailed reports with executive summaries and insights
- **Multi-Agent System**: Leverages specialized AI agents for different aspects of analysis
- **Web Interface**: User-friendly Streamlit interface for easy interaction

## 🛠️ Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/crewai_financial_analyst.git
    cd crewai_financial_analyst/backend
    ```

2. Install the package and dependencies:
    ```bash
    pip install .
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## 🔑 Configuration

### Backend

1. Create a `.env` file in the `backend` directory:
    ```bash
    OPENAI_API_KEY=your_openai_api_key
    SERPER_API_KEY=your_serper_api_key
    OPENAI_MODEL_NAME=gpt-4o-mini
    ```

2. For Streamlit, create `.streamlit/secrets.toml`:
    ```toml
    OPENAI_API_KEY = "your_key_here"
    SERPER_API_KEY = "your_key_here"
    OPENAI_MODEL_NAME = "gpt-4o-mini"
    ```

### Frontend

1. Create a `.env` file in the `frontend` directory:
    ```bash
    REACT_APP_API_URL=http://localhost:8000
    ```

## 🚀 Usage

### Backend

#### Web Interface

Launch the Streamlit application:
```bash
streamlit run [streamlit_app.py](http://_vscodecontentref_/1)

Command Line Interface
Available commands:

# Run analysis
crewai run
# Train the crew
crewai train
# Test the system
crewai test
# Replay specific tasks
crewai replay

Frontend
In the frontend directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

📊 Features in Detail
Analysis Capabilities
Financial Statement Analysis
Market Trend Analysis
Performance Metrics Evaluation
Risk Assessment
Growth Opportunity Identification
AI Agents
Researcher: Gathers financial data and market information
Analyst: Processes and analyzes financial metrics
Report Writer: Generates comprehensive financial reports



🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.