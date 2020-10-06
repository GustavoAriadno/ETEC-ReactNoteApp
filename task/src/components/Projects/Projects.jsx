import React, { Component } from 'react';

class Projects extends Component {
	state = { }

	handleKeyPress(e){
		if (e.key === "Enter"){
			this.props.addProject({name: e.target.value})
			e.target.value = ""
		}
	}
	handleClick(e){
		let project = e.target.innerHTML
		if (project === '(todos)') project = ''
		this.props.filter(project)
	}

	render() {
		return (
			<>
				<h3>Projetos</h3>
				<ul>
					<li onClick={this.handleClick.bind(this)}>(todos)</li>
					{this.props.projects.map(project =>
						<li key={project.name} onClick={this.handleClick.bind(this)}>{project.name}</li>
					)}
				</ul>
				<input type="text" placeholder="Adcionar projeto" onKeyPress={this.handleKeyPress.bind(this)}
				/>
			</>
		);
	}
}

export default Projects;