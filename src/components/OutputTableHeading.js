import React from 'react';
import uniqid from 'uniqid';

import OutputInputField from './OutputInputField';
import AlgorithmSelector from './AlgorithmSelector';

class OutputTableHeading extends React.Component {
	render() {
		return (
			<th>
				<div
					className='heading-title'
					onClick={() => {
						this.props.handleChange('sort', {
							metric: this.props.item,
							desc: !this.props.sortStatus.desc,
						});
					}}
				>
					<span>{this.props.item}</span>{' '}
					{this.props.sortStatus.metric === this.props.item ? (
						<span>
							<div
								className={
									this.props.sortStatus.desc
										? 'arrow-down'
										: 'arrow-up'
								}
							></div>
						</span>
					) : null}
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
