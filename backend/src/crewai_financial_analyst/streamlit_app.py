import streamlit as st
import sys
from pathlib import Path

# Add the parent directory to Python path
file_path = Path(__file__).resolve()
src_directory = file_path.parent.parent.parent
sys.path.append(str(src_directory))

from src.crewai_financial_analyst.crew import CrewaiFinancialAnalystCrew
from datetime import datetime

def get_custom_css():
    return """
    <style>
    .stApp {
        background-color: #f8f9fa;
    }
    
    .gradient-text {
        font-weight: bold;
        background: linear-gradient(to right, #0066cc, #ff6600);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline;
        font-size: 2.5em;
    }
    
    .main-header {
        background: linear-gradient(135deg, #2e7bcf, #1a4f8a);
        padding: 0.8rem;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
        text-align: center;
    }
    
    .main-header h1 {
        color: white;
        font-size: 2rem;
        margin: 0;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }
    
    .main-header p {
        color: #f0f0f0;
        font-size: 1.2rem;
        margin: 0.5rem 0 0 0;
        text-align: center;
    }
    
    .benefit-pills {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }
    
    .benefit-pill {
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        padding: 0.3rem 0.6rem;
        border-radius: 20px;
        font-size: 0.9rem;
        backdrop-filter: blur(5px);
    }
    
    .stButton>button {
        width: 100%;
        background-color: #2e7bcf;
        color: white;
        border-radius: 10px;
        padding: 0.5rem 1rem;
        font-weight: bold;
    }
    
    .output-container {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        margin: 10px 0;
        height: 800px;
        overflow-y: auto;
        border: 1px solid #e0e0e0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .status-container {
        background-color: #ffffff;
        padding: 15px;
        border-radius: 10px;
        margin: 10px 0;
        border: 1px solid #e0e0e0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    </style>
    """

def get_banner():
    return """
<div class="main-header">
    <h1>💼 AI Financial Analysis Crew</h1>
    <p>Powered by CrewAI - Your Advanced Financial Analysis Assistant</p>
    <div class="benefit-pills">
        <span class="benefit-pill">📊 Financial Research</span>
        <span class="benefit-pill">📈 Data Analysis</span>
        <span class="benefit-pill">📝 Report Generation</span>
    </div>
</div>

    """

st.set_page_config(page_title="Financial Analysis Crew", page_icon="📊", layout="wide")

# Apply custom CSS and banner
st.markdown(get_custom_css(), unsafe_allow_html=True)
st.markdown(get_banner(), unsafe_allow_html=True)

# Create two main columns for the entire app
col1, col2 = st.columns([1, 1])

with col1:
    # User Inputs Section
    st.markdown("### 📝 User Inputs")
    with st.form("analysis_form"):
        topic = st.text_input(
            "Analysis Topic",
            placeholder="e.g., NVIDIA Financial Report Analysis"
        )
        financial_period = st.text_input(
            "Financial Period",
            placeholder="e.g., Q4 2024"
        )
        focus_areas = st.text_area(
            "Analysis Focus Areas",
            placeholder="e.g., Revenue Growth, Profit Margins, Debt Levels, Market Expansion",
            height=50
        )
        objectives = st.text_area(
            "Analysis Objectives",
            placeholder="e.g., Summarize key highlights, identify strengths and weaknesses",
            height=50
        )
        submitted = st.form_submit_button("🚀 Run Analysis")

if submitted:
    if not all([topic, financial_period, focus_areas, objectives]):
        st.error("Please fill in all fields")
    else:
        # Initialize inputs
        inputs = {
            'topic': topic,
            'financial_period': financial_period,
            'focus_areas': focus_areas,
            'objectives': objectives,
        }

        try:
            with col1:
                # Analysis Status Section
                st.markdown("### 🔄 Analysis Status")
                status_container = st.container()
                with status_container:
                    st.markdown(
                        """<div class="status-container">
                        🔍 <b>Researcher:</b> Initializing...<br>
                        ⏳ <b>Analyst:</b> Waiting...<br>
                        ⏳ <b>Report Writer:</b> Waiting...
                        </div>""", 
                        unsafe_allow_html=True
                    )

            with col2:
                st.markdown("### 📊 Final Analysis")
                final_output_container = st.empty()
                
                # Initialize output placeholder with markdown formatting
                output_text = f"""
                ### Analysis Started at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
                """
                
                with final_output_container.container():
                    st.markdown(f"""<div class="output-container">{output_text}</div>""", 
                              unsafe_allow_html=True)
                
                # Run the crew
                crew = CrewaiFinancialAnalystCrew()
                result = crew.crew().kickoff(inputs=inputs)

                # Update final output with results - simplified format
                final_output = f"""
                {output_text}
                {result}
                """
                
                with final_output_container.container():
                    st.markdown(f"""<div class="output-container">{final_output}</div>""", 
                              unsafe_allow_html=True)

                # Update status to complete
                with status_container:
                    st.markdown(
                        """<div class="status-container">
                        ✅ <b>Researcher:</b> Complete<br>
                        ✅ <b>Analyst:</b> Complete<br>
                        ✅ <b>Report Writer:</b> Complete
                        </div>""", 
                        unsafe_allow_html=True
                    )

        except Exception as e:
            st.error(f"An error occurred during analysis: {str(e)}")