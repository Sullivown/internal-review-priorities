import React from 'react';

class OutputInputField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			weight: this.getWeight(),
		};
	}

	getWeight = () => {
		const weight = this.props.functionMapping[this.props.item]
			? this.props.functionMapping[this.props.item].weight
			: 0;

		return weight;
	};

	render() {
		return (
			<React.Fragment>
				<label htmlFor={'weight-' + this.props.item}>weight: </label>
				<input
					id={'weight-' + this.props.item}
					value={this.state.weight}
					data-key={this.props.item}
					onChange={(e) => {
						this.setState({ weight: e.target.value });
					}}
					onBlur={(e) => {
						this.props.updateFunctionMapping(e);
					}}
					onKeyUp={(e) => {
						if (e.key === 'Enter') {
							console.log('enterpressed');
							this.props.updateFunctionMapping(e);
						}
					}}
				/>
			</React.Fragment>
		);
	}
}

export default OutputInputField;
