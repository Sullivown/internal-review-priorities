import React from 'react';

import '../styles/Home.css';

class Home extends React.Component {
	render() {
		return (
			<div id='home'>
				<div className='info-div'>
					<h2>Welcome to Internal Review Priorities!</h2>
					<p>What would you like to prioritise today?</p>
					<div className='accent-div'>
						<h2>Current data:</h2>

						{this.props.fileName ? (
							<p>{this.props.fileName}</p>
						) : (
							<div>
								<p>No file found!</p>
								<p>Upload a new file to get started.</p>
							</div>
						)}
					</div>
				</div>

				<div className='controls-div'>
					<h2>Control Panel</h2>
					<div className='controls-section'>
						<div>
							<h3>Upload Data</h3>
							<p>
								Note that this will overwrite any existing data!
							</p>
						</div>
						<button
							type='button'
							onClick={(e) => {
								this.props.handleClick('currentView', 'upload');
							}}
						>
							Go to Upload
						</button>
					</div>
					<div className='controls-section'>
						<div>
							<h3>Edit Data</h3>
							<p>Edit uploaded raw data to be processed.</p>
						</div>
						<button
							type='button'
							onClick={(e) => {
								this.props.handleClick('currentView', 'edit');
							}}
						>
							Go to Edit
						</button>
					</div>
					<div className='controls-section'>
						<div>
							<h3>View Output</h3>
							<p>
								View processed data output, adjust weights and
								assign algorithms.
							</p>
						</div>
						<button
							type='button'
							onClick={(e) => {
								this.props.handleClick('currentView', 'output');
							}}
						>
							Go to Output
						</button>
					</div>
					<div className='controls-section'>
						<div>
							<h3>Adjust Settings</h3>
							<p>View and edit algorithms.</p>
						</div>
						<button
							type='button'
							onClick={(e) => {
								this.props.handleClick(
									'currentView',
									'settings'
								);
							}}
						>
							Go to Settings
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
