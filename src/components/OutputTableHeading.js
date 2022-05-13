import React from 'react';
import uniqid from 'uniqid';

import OutputInputField from './OutputInputField';
import AlgorithmSelector from './AlgorithmSelector';

class OutputTableHeading extends React.Component {
	render() {
		return (
			<th>
				<div>{this.props.item}</div>
				{this.props.item !== 'title' && this.props.item !== 'writer' ? (
					<div className='table-header-div'>
						<hr />
						<OutputInputField
							key={uniqid()}
							item={this.props.item}
							functionMapping={this.props.functionMapping}
							updateFunctionMapping={
								this.props.updateFunctionMapping
							}
						/>
						<AlgorithmSelector
							key={uniqid()}
							item={this.props.item}
						/>
					</div>
				) : null}
			</th>
		);
	}
}

export default OutputTableHeading;
