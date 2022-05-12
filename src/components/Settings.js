import React from 'react';

import uniqid from 'uniqid';

import '../styles/Settings.css';
import FunctionEditor from './functionEditor';

class Settings extends React.Component {
	render() {
		const funcArr = [];

		for (let scoringFunction in this.props.functionMapping) {
			if (scoringFunction !== 'totalWeight') {
				funcArr.push({
					name: scoringFunction,
					details: this.props.functionMapping[scoringFunction],
				});
			}
		}

		const funcMapArrMapped = funcArr.map((item) => {
			return (
				<FunctionEditor
					key={uniqid()}
					item={item}
					updateFunctionMapping={this.props.updateFunctionMapping}
				/>
			);
		});

		return (
			<div>
				<h1>Settings</h1>
				<div>{funcMapArrMapped}</div>
			</div>
		);
	}
}

export default Settings;
