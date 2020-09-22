import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: ''
		}
	}

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		})
	}

	handleSubmit = event => {
		window.location=""(`${this.state.name}`)
		event.preventDefault()
	}

	render() {
		const { name } = this.state
		return (
			<form onSubmit={this.handleSubmit}>
			<center>
			<h1>
			Hi there! Welcome to your education showcase.
			</h1>
			<br />
			<h2>
			Type your name and click "Enter" below to begin!
			</h2>
				<div>
				<br />
					<input
						type="text"
						value={name}
						onChange={this.handleNameChange}
						placeholder="Your Name"
					/>
				</div>
				<button type="submit">Enter</button>
			</center>
			</form>
		)
	}
}

export default Form
