import React from 'react';
import uniqid from 'uniqid';
import FunctionTemplates from '../mappingFunctions/functionTemplates';

class AlgorithmSelector extends React.Component {
	render() {
		const algorithms = Object.keys(FunctionTemplates.templates);

		const selectArray = algorithms.map((item) => {
			return <option key={uniqid()}>{item}</option>;
		});

		return (
			<div>
				<label htmlFor={'algorithm-' + this.props.item}>algo: </label>
				<select id={'algorithm-' + this.props.item}>
					{selectArray}
				</select>
			</div>
		);
	}
}

export default AlgorithmSelector;
