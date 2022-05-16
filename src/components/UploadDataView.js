import React from 'react';

import CSVToArray from '../helpers/CSVToArray';

import '../styles/Upload.css';

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
			this.props.handleChange('rawData', arr);
			this.props.handleChange('fileName', file.name);
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
				<div>
					<p>
						Note that data is only stored in localStorage (nowhere
						online) and should persist between sessions.
					</p>
					<p>
						Uploading a new file will overwrite any existing data,
						so use with caution!
					</p>
				</div>
				<div className='uploader'>
					<h3 className='current'>Current File:</h3>
					<p>{this.props.fileName || 'None.'}</p>
					<h3>Upload a new file:</h3>
					<form
						onSubmit={(e) => {
							this.handleSubmit(e);
						}}
					>
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
						<div className='upload-message success'>
							<p>Upload successful!</p>
							<button
								type='button'
								onClick={(e) =>
									this.props.handleChange(
										'currentView',
										'edit'
									)
								}
							>
								Proceed to Edit Data
							</button>
						</div>
					) : null}
					{this.state.hasError ? (
						<div className='upload-message error'>
							<p>Error: please select a valid .csv file</p>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default UploadDataView;
