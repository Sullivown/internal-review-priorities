import React from 'react';
import uniqid from 'uniqid';

import FunctionEditor from './functionEditor';
import FunctionTemplatesModule from '../mappingFunctions/FunctionTemplatesModule';

import '../styles/Settings.css';

class Settings extends React.Component {
	render() {
		const funcArr = [];

		for (let scoringFunction in FunctionTemplatesModule.templates) {
			if (scoringFunction !== 'totalWeight') {
				funcArr.push({
					name: scoringFunction,
					details: FunctionTemplatesModule.templates[scoringFunction],
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
