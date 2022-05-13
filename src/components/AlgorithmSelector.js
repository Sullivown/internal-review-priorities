import React from 'react';
import uniqid from 'uniqid';
import FunctionTemplatesModule from '../mappingFunctions/FunctionTemplatesModule';

class AlgorithmSelector extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState(
			{
				selected: e.target.value,
			},
			() => {
				this.props.updateFunctionMapping(
					this.props.item,
					'algorithm',
					this.state.selected
				);
			}
		);
	};

	componentDidMount() {
		let value;
		if (this.props.functionMapping[this.props.item]) {
			value = this.props.functionMapping[this.props.item].algorithm;
		}
		this.setState({
			selected: value,
		});
	}

	render() {
		const algorithms = Object.keys(FunctionTemplatesModule.templates);

		const selectArray = algorithms.map((item) => {
			return (
				<option key={uniqid()} value={item}>
					{item}
				</option>
			);
		});

		return (
			<div>
				<label htmlFor={'algorithm-' + this.props.item}>algo: </label>
				<select
					id={'algorithm-' + this.props.item}
					value={this.state.selected}
					onChange={this.handleChange}
				>
					{selectArray}
				</select>
			</div>
		);
	}
}

export default AlgorithmSelector;
