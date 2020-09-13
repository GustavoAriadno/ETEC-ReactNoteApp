import React, { Component } from 'react';
import './style.css'

class Form extends Component {

	constructor() {
		super()
		this.state = {
			title: "",
			description: "",
			status: 0,
			project: ""
		};
	}

	handleSubmit(event){
		event.preventDefault()
		this.props.addTask(this.state)
	}
	handleChangeTitle(event){
		this.setState({title: event.target.value})
	}
	handleChangeDescription(event){
		this.setState({description: event.target.value})
	}
	handleChangeProject(event){
		this.setState({project: event.target.value})
	}

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.handleSubmit.bind(this)}>
					<input
						type="text"
						placeholder="titulo"
						onChange={this.handleChangeTitle.bind(this)}
					/>
					<textarea
						placeholder="descricao"
						onChange={this.handleChangeDescription.bind(this)}
					/>
					<select onChange={this.handleChangeProject.bind(this)}>
						{this.props.projects.map(project => <option>{project.name}</option>)}
					</select>
					<button>Salvar</button>
				</form>
			</div>
		);
	}
}

export default Form;