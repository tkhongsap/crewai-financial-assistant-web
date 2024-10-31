import os
from datetime import datetime

def generate_readme():
    readme_content = f"""# 💼 AI Financial Analysis Crew

## 🚀 Overview
AI Financial Analysis Crew is a sophisticated financial analysis tool powered by CrewAI that automates comprehensive financial report analysis. It employs multiple AI agents working in concert to research, analyze, and generate detailed financial reports.

## 🤖 Key Features
- **Automated Research**: Gathers and analyzes financial data from multiple sources
- **Intelligent Analysis**: Processes financial statements with focus on key metrics
- **Custom Reports**: Generates detailed reports with executive summaries and insights
- **Multi-Agent System**: Leverages specialized AI agents for different aspects of analysis
- **Web Interface**: User-friendly Streamlit interface for easy interaction

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/crewai_financial_analyst.git
cd crewai_financial_analyst

# Install the package and dependencies
pip install .
```

## 🔑 Configuration

1. Create a `.env` file in the root directory:
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

## 🚀 Usage

### Web Interface
Launch the Streamlit application:
```bash
streamlit run src/crewai_financial_analyst/streamlit_app.py
```

### Command Line Interface
Available commands:
```bash
# Run analysis
crewai run

# Train the crew
crewai train

# Test the system
crewai test

# Replay specific tasks
crewai replay
```

## 📊 Features in Detail

### Analysis Capabilities
- Financial Statement Analysis
- Market Trend Analysis
- Performance Metrics Evaluation
- Risk Assessment
- Growth Opportunity Identification

### AI Agents
1. **Researcher**: Gathers financial data and market information
2. **Analyst**: Processes and analyzes financial metrics
3. **Report Writer**: Generates comprehensive financial reports

## 📁 Project Structure
```
crewai_financial_analyst/
├── src/
│   └── crewai_financial_analyst/
│       ├── config/
│       │   ├── agents.yaml    # Agent configurations
│       │   └── tasks.yaml     # Task definitions
│       ├── output/            # Generated reports
│       ├── crew.py           # Core crew implementation
│       ├── main.py           # CLI entry point
│       └── streamlit_app.py  # Web interface
├── scripts/
│   └── update_readme.py      # README generator
├── .env                      # Environment variables
├── .streamlit/
│   ├── config.toml          # Streamlit configuration
│   └── secrets.toml         # Streamlit secrets
├── Dockerfile               # Container configuration
├── pyproject.toml          # Project dependencies
└── README.md               # This file
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Last Updated
{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""
    
    # Write with UTF-8 encoding
    with open('README.md', 'w', encoding='utf-8') as f:
        f.write(readme_content)

if __name__ == "__main__":
    generate_readme()