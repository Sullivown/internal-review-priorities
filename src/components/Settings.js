import React from 'react';

import '../styles/Settings.css';

class Settings extends React.Component {
	render() {
		const { functionMapping } = this.props;
		const funcArr = [];

		for (const item in functionMapping) {
			console.log(functionMapping[item].algorithm);
			funcArr.push(functionMapping[item]);
		}

		const funcMapArrMapped = funcArr.map((item) => {
			return (
				<div>
					<h2>{Object.keys(item)[0]}</h2>
					<textarea cols='100' rows='10'>
						{item.algorithm.toString()}
					</textarea>
				</div>
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
