import React from 'react';

class OutputView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			initialising: true,
		};
	}
	render() {
		return (
			<div>
				<h1>Output</h1>
			</div>
		);
	}
}

export default OutputView;
