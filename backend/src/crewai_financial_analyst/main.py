#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import json
import io
from crewai_financial_analyst.crew import CrewaiFinancialAnalystCrew
from dotenv import load_dotenv

# Set up UTF-8 encoding for input/output
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

def serialize_output(result):
    """Helper function to serialize any output type"""
    if hasattr(result, 'dict'):
        return result.dict()
    elif hasattr(result, '__dict__'):
        return {
            'output': str(result),
            'details': result.__dict__
        }
    elif isinstance(result, (list, tuple)):
        return [str(item) for item in result]
    else:
        return str(result)

def analyze(input_json):
    """Run the analysis with the provided input"""
    try:
        inputs = json.loads(input_json)
        crew = CrewaiFinancialAnalystCrew()
        result = crew.kickoff(inputs)
        
        output_dict = {
            'analysis': serialize_output(result)
        }
            
        print(json.dumps(output_dict, ensure_ascii=False, default=str))
        return 0
        
    except Exception as e:
        error_msg = str(e).encode('utf-8', errors='replace').decode('utf-8')
        print(json.dumps({'error': error_msg}), file=sys.stderr)
        return 1

if __name__ == "__main__":
    load_dotenv()
    
    if len(sys.argv) < 3:
        print("Usage: main.py <command> <input_json>", file=sys.stderr)
        sys.exit(1)
    
    command = sys.argv[1]
    input_json = sys.argv[2]
    
    if command == "analyze":
        sys.exit(analyze(input_json))
    else:
        print(f"Unknown command: {command}", file=sys.stderr)
        sys.exit(1)
