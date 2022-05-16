import React from 'react';
import FunctionTemplates from '../mappingFunctions/FunctionTemplatesModule';

class FunctionEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			textArea: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		const content = this.props.item.details.toString();
		const funcString = content.toString();
		const startIndex = funcString.indexOf('{');
		const endIndex = funcString.lastIndexOf('}');

		const funcContent = funcString.substring(startIndex + 1, endIndex);
		this.setState({ textArea: funcContent });
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<div className='function-editor'>
				<h2>{this.props.item.name}</h2>
				<div className='function-editor-function'>
					<p className='p-top'>
						function {this.props.item.name}(<span>value</span>){' '}
						{`{`}
					</p>
					<textarea
						name='textArea'
						value={this.state.textArea}
						readOnly={true}
						onChange={this.handleChange}
					></textarea>
					<p className='p-bottom'>{`};`}</p>
				</div>

				<button
					onClick={() => {
						FunctionTemplates.update({
							key: this.props.item.name,
							value: this.state.textArea,
						});
					}}
				>
					Save
				</button>
			</div>
		);
	}
}

export default FunctionEditor;
