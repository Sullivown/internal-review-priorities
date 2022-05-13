import React from 'react';
import uniqid from 'uniqid';

import OutputInputField from './OutputInputField';
import AlgorithmSelector from './AlgorithmSelector';

class OutputTableHeading extends React.Component {
	render() {
		return (
			<th>
				<div
					onClick={() => {
						this.props.handleChange('sort', {
							metric: this.props.item,
							desc: true,
						});
					}}
				>
					{this.props.item}
				</div>
				{this.props.item !== 'title' ? (
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
						{this.props.item !== 'total' ? (
							<AlgorithmSelector
								key={uniqid()}
								item={this.props.item}
								functionMapping={this.props.functionMapping}
								updateFunctionMapping={
									this.props.updateFunctionMapping
								}
							/>
						) : null}
					</div>
				) : null}
			</th>
		);
	}
}

export default OutputTableHeading;
