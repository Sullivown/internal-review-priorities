import React from 'react';
import uniqid from 'uniqid';

class OutputTableHeading extends React.Component {
	render() {
		return (
			<th key={uniqid()}>
				<div>{this.props.item}</div>
				{this.props.item !== 'title' && this.props.item !== 'total' ? (
					<div className='weight-div'>
						<hr />
						<label htmlFor='weight'>weight:</label>
						<input
							type='number'
							onChange={(e) =>
								this.props.updateFunctionMapping({
									key: this.props.item,
									value: e.target.value,
								})
							}
						/>
					</div>
				) : null}
			</th>
		);
	}
}

export default OutputTableHeading;
