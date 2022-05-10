import React from 'react';
import copyValue from '../mappingFunctions/copyValue';
import statusRef from '../mappingFunctions/statusRef';

import '../styles/Settings.css';

class Settings extends React.Component {
	render() {
		const funcArr = [];

		funcArr.push(copyValue, statusRef);

		const funcMapArrMapped = funcArr.map((item) => {
			return (
				<div>
					<h2>{item.name}</h2>
					<textarea cols='100' rows='10' readOnly>
						{item.toString()}
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
