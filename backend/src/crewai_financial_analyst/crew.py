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

# Load environment variables from .env file
load_dotenv()

# Instantiate tools
docs_tool = DirectoryReadTool(directory='./reports')
file_tool = FileReadTool(file_path="")
search_tool = SerperDevTool()
web_rag_tool = WebsiteSearchTool()

@CrewBase
class CrewaiFinancialAnalystCrew():
	"""CrewaiFinancialAnalyst crew"""

	@agent
	def researcher(self) -> Agent:
		return Agent(
			config=self.agents_config['researcher'],
			verbose=True,
			tools=[search_tool, web_rag_tool],  # Tools for research
			allow_delegation=False
		)

	@agent
	def analyst(self) -> Agent:
		return Agent(
			config=self.agents_config['analyst'],
			verbose=True,
			tools=[docs_tool, file_tool],
			allow_delegation=False
		)

	@agent
	def report_writer(self) -> Agent:
		return Agent(
			config=self.agents_config['report_writer'],
			verbose=True,
			tools=[docs_tool, file_tool],
			allow_delegation=False
		)

	@task
	def research_task(self) -> Task:
		return Task(
			config=self.tasks_config['research_task'],
			agent=self.researcher()
		)

	@task
	def analysis_task(self) -> Task:
		return Task(
			config=self.tasks_config['analysis_task'],
			agent=self.analyst()
		)

	@task
	def report_task(self) -> Task:
		return Task(
			config=self.tasks_config['report_task'],
			output_file='output/financial_report.md',
			agent=self.report_writer()
		)

	@crew
	def crew(self) -> Crew:
		"""Creates the CrewaiFinancialAnalyst crew"""
		return Crew(
			agents=self.agents,
			tasks=self.tasks,
			process=Process.sequential,
			verbose=True
		)