import React from 'react';
import uniqid from 'uniqid';

class OutputTableHeading extends React.Component {
	render() {
		const weight = this.props.functionMapping[this.props.item]
			? this.props.functionMapping[this.props.item].weight
			: 0;

		return (
			<th>
				<div>{this.props.item}</div>
				{this.props.item !== 'title' && this.props.item !== 'total' ? (
					<div className='weight-div'>
						<hr />
						<label htmlFor={'weight-' + this.props.item}>
							weight:{' '}
						</label>
						<input
							key={uniqid()}
							id={'weight-' + this.props.item}
							type='number'
							value={weight}
							data-key={this.props.item}
							onChange={this.props.updateFunctionMapping}
						/>
					</div>
				) : null}
			</th>
		);
	}
}

export default OutputTableHeading;
