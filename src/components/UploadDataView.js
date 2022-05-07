import React from 'react';

import CSVToArray from '../helpers/CSVToArray';

class UploadDataView extends React.Component {
	constructor() {
		super();

		this.state = {
			file: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.files[0] });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const file = e.target[0].files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			const arr = CSVToArray(event.target.result);
			this.props.changeFile(arr);
		};

		reader.readAsText(file);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='file'
						id='file'
						name='file'
						accept='.csv'
						onChange={this.handleChange}
					></input>
					<button type='submit'>Upload File</button>
				</form>
			</div>
		);
	}
}

export default UploadDataView;
