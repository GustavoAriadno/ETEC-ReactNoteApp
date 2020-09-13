import React, { Component } from 'react';
import './App.css';
import Task from './components/Task/Task';
import Form from './components/Form/Form';
import Projects from './components/Projects/Projects';

class App extends Component {

	constructor() {
		super()
		this.state = {
			tasks: [],
			projects: [
				{name: 'TCC'},
				{name: 'PW'},
			],
			filter: ''
		}
	}

	addTask(task) {
		this.setState({ tasks: [...this.state.tasks, task] })
	}

	addProject(project) {
		this.setState({ projects: [...this.state.projects, project] })
	}

	deleteTask(index) {
		let newTasks = this.state.tasks
		newTasks.splice(index, 1)
		this.setState({tasks: newTasks})
	}

	increment(index) {
		let task = this.state.tasks[index]
		task.status += 10
		if (task.status > 100) task.status = 100
		let newTasks = this.state.tasks
		newTasks.splice(index, 1, task)
		this.setState({tasks: newTasks})
	}

	decrement(index) {
		let task = this.state.tasks[index]
		task.status -= 10
		if (task.status < 0) task.status = 0
		let newTasks = this.state.tasks
		newTasks.splice(index, 1, task)
		this.setState({tasks: newTasks})
	}
	filter(project) {
		this.setState({filter: project})
	}

	render() {
		return (
			<>
				<div className="container">
					<section>
						<h1>TASK</h1>
						<Form
							addTask={this.addTask.bind(this)}
							projects={this.state.projects}/>
						<Projects
							projects={this.state.projects}
							addProject={this.addProject.bind(this)}
							filter={this.filter.bind(this)}/>
					</section>
					<section className="taks">
						{this.state.tasks
						.filter(task => task.project === this.state.filter)
						.map((task, index) => (
							<Task
								key={index}
								index={index}
								task={task}
								increment={this.increment.bind(this)}
								decrement={this.decrement.bind(this)}
								deleteTask={this.deleteTask.bind(this)}
							/>
						))}
					</section>
				</div>
			</>
		);
	}
}

export default App;
