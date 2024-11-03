import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew, Process
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import (
    DirectoryReadTool,
    FileReadTool,
    SerperDevTool,
    WebsiteSearchTool
)

# Load environment variables
load_dotenv()

# Initialize tools
docs_tool = DirectoryReadTool(directory='./reports')
file_tool = FileReadTool(file_path="")
search_tool = SerperDevTool()
web_tool = WebsiteSearchTool()

@CrewBase
class CrewaiFinancialAnalystCrew:
    """CrewAI Financial Analysis Crew"""

    @agent
    def researcher(self) -> Agent:
        """Create the researcher agent."""
        return Agent(
            config=self.agents_config['researcher'],
            verbose=True,
            tools=[search_tool, web_tool],
            allow_delegation=False
        )

    @agent
    def analyst(self) -> Agent:
        """Create the analyst agent."""
        return Agent(
            config=self.agents_config['analyst'],
            verbose=True,
            tools=[docs_tool, file_tool],
            allow_delegation=False
        )

    @agent
    def report_writer(self) -> Agent:
        """Create the report writer agent."""
        return Agent(
            config=self.agents_config['report_writer'],
            verbose=True,
            tools=[docs_tool, file_tool],
            allow_delegation=False
        )

    @task
    def research_task(self) -> Task:
        """Create the research task."""
        return Task(
            config=self.tasks_config['research_task'],
            agent=self.researcher()
        )

    @task
    def analysis_task(self) -> Task:
        """Create the analysis task."""
        return Task(
            config=self.tasks_config['analysis_task'],
            agent=self.analyst()
        )

    @task
    def report_task(self) -> Task:
        """Create the report writing task."""
        return Task(
            config=self.tasks_config['report_task'],
            output_file='output/financial_report.md',
            agent=self.report_writer()
        )

    @crew
    def crew(self) -> Crew:
        """Creates the CrewAI Financial Analysis crew"""
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True
        )

    def kickoff(self, inputs):
        """Kickoff the crew with inputs"""
        return self.crew().kickoff(inputs=inputs)