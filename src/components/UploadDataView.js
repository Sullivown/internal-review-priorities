import React from 'react';

import CSVToArray from '../helpers/CSVToArray';

class UploadDataView extends React.Component {
	constructor() {
		super();

		this.state = {
			uploadSuccessful: false,
			hasError: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ uploadSuccessful: false, hasError: false });

		const file = e.target[0].files[0];
		const reader = new FileReader();

		if (!file || file.name.slice(-4) !== '.csv') {
			this.setState({ hasError: true });
			console.error('Invalid file');
			return;
		}

		reader.onload = (event) => {
			const arr = CSVToArray(event.target.result);
			this.props.updateRawData('rawData', arr);
		};

		reader.readAsText(file);
		this.setState({
			uploadSuccessful: true,
		});
	};

	render() {
		return (
			<div>
				<h1>Upload Data</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type='file'
						id='file'
						name='file'
						accept='.csv'
						onChange={this.handleChange}
						required
					></input>
					<button type='submit'>Upload File</button>
				</form>
				{this.state.uploadSuccessful ? (
					<div>
						<p>Upload successful!</p>
						<button
							type='button'
							onClick={() =>
								this.props.changeView('currentView', 'edit')
							}
						>
							Proceed to Edit Data
						</button>
					</div>
				) : null}
				{this.state.hasError ? (
					<div>
						<p>Error: please select a valid .csv file</p>
					</div>
				) : null}
			</div>
		);
	}
}

export default UploadDataView;
