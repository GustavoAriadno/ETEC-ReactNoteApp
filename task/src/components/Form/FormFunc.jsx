import React from 'react';
import './style.css'
import { useState } from 'react';

const Form = (props) => {

	// const [id, setId] = useState()
	const [title, setTitle] = useState()
	const [description, setDescription] = useState()
	const [status, setStatus] = useState(0)
	const [project, setProject] = useState()
	
	const handleSubmit = e => {
		e.preventDefault()
		const task = {id: Date.now, title, description, status, project}
		props.addTask(task)
	}

	return (
		<div>
			<form
				className="form"
				onSubmit={handleSubmit}
				>
				<input
					type="text"
					placeholder="titulo"
					onChange={e => setTitle(e.target.value)}/>
				<textarea
					placeholder="descricao"
					onChange={e => setDescription(e.target.value)}/>
				<select
					onChange={e => setProject(e.target.value)}>
					{props.projects.map(project =>
						<option key={project.name} >{project.name}</option>)}
				</select>
				<button>Salvar</button>
			</form>
		</div>
	);
}

export default Form;
