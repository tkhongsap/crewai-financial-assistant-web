#!/usr/bin/env python
import sys
from crewai_financial_analyst.crew import CrewaiFinancialAnalystCrew
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Define the input for the crew's tasks once at the top
inputs = {
    'topic': 'NVIDIA Financial Report Analysis',
    'financial_period': 'Q4 2024',
    'focus_areas': 'The latest on financial statements, focusing on Revenue Growth, Profit Margins, Debt Levels, Market Expansion',
    'objectives': 'Summarize key highlights of the latest financial report, identify strengths and weaknesses in financial performance',      
}

def run():
    """
    Run the crew.
    """
    CrewaiFinancialAnalystCrew().crew().kickoff(inputs=inputs)

def train():
    """
    Train the crew for a given number of iterations.
    """
    try:
        CrewaiFinancialAnalystCrew().crew().train(n_iterations=int(sys.argv[1]), filename=sys.argv[2], inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while training the crew: {e}")

def replay():
    """
    Replay the crew execution from a specific task.
    """
    try:
        CrewaiFinancialAnalystCrew().crew().replay(task_id=sys.argv[1])
    except Exception as e:
        raise Exception(f"An error occurred while replaying the crew: {e}")

def test():
    """
    Test the crew execution and return the results.
    """
    try:
        CrewaiFinancialAnalystCrew().crew().test(n_iterations=int(sys.argv[1]), openai_model_name=sys.argv[2], inputs=inputs)
    except Exception as e:
        raise Exception(f"An error occurred while testing the crew: {e}")
