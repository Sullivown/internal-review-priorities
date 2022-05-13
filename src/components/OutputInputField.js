import React from 'react';

class OutputInputField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			weight: 0,
		};
	}

	getWeight = () => {
		const weight = this.props.functionMapping[this.props.item]
			? this.props.functionMapping[this.props.item].weight
			: 0;
		return weight;
	};

	componentDidMount() {
		this.setState({ weight: this.getWeight() });
	}

	render() {
		return (
			<div>
				<label htmlFor={'weight-' + this.props.item}>weight: </label>
				{this.props.item === 'total' ? (
					<div>{this.props.functionMapping.totalWeight}</div>
				) : (
					<input
						id={'weight-' + this.props.item}
						value={this.state.weight}
						data-category={this.props.item}
						data-field='weight'
						onChange={(e) => {
							this.setState({ weight: e.target.value });
						}}
						onBlur={(e) => {
							this.props.updateFunctionMapping(
								e.target.dataset.category,
								e.target.dataset.field,
								parseFloat(e.target.value)
							);
						}}
						onKeyUp={(e) => {
							if (e.key === 'Enter') {
								this.props.updateFunctionMapping(
									e.target.dataset.category,
									e.target.dataset.field,
									parseFloat(e.target.value)
								);
							}
						}}
					/>
				)}
			</div>
		);
	}
}

export default OutputInputField;
