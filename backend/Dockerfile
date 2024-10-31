FROM python:3.10-slim

WORKDIR /app

# Copy only the pyproject.toml first
COPY pyproject.toml .

# Install dependencies
RUN pip install .

# Copy the rest of the application
COPY . .

EXPOSE 8501

ENTRYPOINT ["streamlit", "run", "src/crewai_financial_analyst/streamlit_app.py", "--server.port=8501", "--server.address=0.0.0.0"] 