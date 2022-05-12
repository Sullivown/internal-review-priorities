import React from 'react';

import convertToFunction from '../helpers/convertToFunction';

class FunctionEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			textArea: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		const content = this.props.item.details.algorithm;
		console.log(content);
		this.setState({ textArea: content });
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<div>
				<h2>{this.props.item.name}</h2>
				<textarea
					name='textArea'
					value={this.state.textArea}
					cols='100'
					rows='10'
					onChange={this.handleChange}
				></textarea>
				<button
					onClick={() => {
						this.props.updateFunctionMapping(
							this.props.item.name,
							'algorithm',
							this.state.textArea
						);
					}}
				>
					Save
				</button>
			</div>
		);
	}
}

export default FunctionEditor;
