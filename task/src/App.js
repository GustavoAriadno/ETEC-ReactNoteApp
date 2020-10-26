import React, { Component } from 'react';
import './App.css';
import Task from './components/Task/TaskFunc';
import Form from './components/Form/FormFunc';
import Projects from './components/Projects/Projects';

import axios from "axios";

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

	componentDidMount() {
		axios.get("http://localhost:8000/task")
		.then(response => this.setState({tasks: response.data}))

		// fetch("http://localhost:8000/task")
		// .then(response => {
		// 	response.json().then((task) => {
		// 		this.setState({tasks: task})
		// 	})
		// })
	}
	addTask(task) {
		axios.post("http://localhost:8000/task", task)
		.then(response => this.setState({tasks: response.data}))
	}

	addProject(project) {
		this.setState({ projects: [...this.state.projects, project] })
	}

	deleteTask(id) {
		axios.delete("http://localhost:8000/task/" + id)
		.then(response => this.setState({tasks: response.data}))

		// let newTasks = this.state.tasks
		// const index = newTasks.findIndex(task => task.id === id)
		// newTasks.splice(index, 1)
		// this.setState({tasks: newTasks})
	}

	increment(id) {
		axios.get("http://localhost:8000/task/increment/" + id)
		.then(response => this.setState({tasks: response.data}))

		// let newTasks = this.state.tasks
		// const index = newTasks.findIndex(task => task.id === id)
		// let task = newTasks[index]
		// task.status += 10
		// if (task.status > 100) task.status = 100
		// newTasks.splice(index, 1, task)
		// this.setState({tasks: newTasks})
	}

	decrement(id) {
		axios.get("http://localhost:8000/task/decrement/" + id)
		.then(response => this.setState({tasks: response.data}))

		// let newTasks = this.state.tasks
		// const index = newTasks.findIndex(task => task.id === id)
		// let task = newTasks[index]
		// task.status -= 10
		// if (task.status < 0) task.status = 0
		// newTasks.splice(index, 1, task)
		// this.setState({tasks: newTasks})
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
						.filter(
							task =>
								task.project === this.state.filter || this.state.filter === '')
						.map((task) => (
							<Task
								key={task.id}
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
