import React, { Component } from 'react'
import './style.css'

export default class Task extends Component {

	deleteTask() { this.props.deleteTask(this.props.index) }
	
	increment() { this.props.increment(this.props.index) }
	
	decrement() { this.props.decrement(this.props.index) }

	render() {
		return (
			<div className="card-task">
				<h2>{this.props.task.title}</h2>
				<p>{this.props.task.description}</p>
				<div className="status">
					<span style={{width:this.props.task.status + '%'}}></span>
				</div>
				<div className="task-actions">
					<button className="btn-sm" onClick={this.increment.bind(this)}>
						<span className="material-icons">add</span>
					</button>
					<button className="btn-sm" onClick={this.decrement.bind(this)}>
						<span className="material-icons">remove</span>
					</button>
					<button className="btn-sm btn-danger" onClick={this.deleteTask.bind(this)}>
						<span className="material-icons">delete</span>
					</button>
				</div>
				<div>{this.props.task.project}</div>
			</div>
		);
	}
}