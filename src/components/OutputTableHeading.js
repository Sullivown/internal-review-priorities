import React from 'react';
import uniqid from 'uniqid';

class OutputTableHeading extends React.Component {
	getWeight = () => {
		const weight = this.props.functionMapping[this.props.item]
			? this.props.functionMapping[this.props.item].weight
			: 0;

		return weight;
	};

	render() {
		return (
			<th>
				<div>{this.props.item}</div>
				{this.props.item !== 'title' &&
				this.props.item !== 'total' &&
				this.props.item !== 'writer' ? (
					<div className='weight-div'>
						<hr />
						<label htmlFor={'weight-' + this.props.item}>
							weight:{' '}
						</label>
						<input
							key={uniqid()}
							id={'weight-' + this.props.item}
							type='number'
							value={this.getWeight()}
							data-key={this.props.item}
							autoFocus={
								this.props.editableFocus ===
								'weight-' + this.props.item
									? 'autofocus'
									: ''
							}
							onChange={(e) => {
								this.props.setEditableFocus(e.target.id);
								this.props.updateFunctionMapping(e);
							}}
						/>
					</div>
				) : null}
			</th>
		);
	}
}

export default OutputTableHeading;
