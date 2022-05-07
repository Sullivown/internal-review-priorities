import React from 'react';

import '../styles/EditData.css';

class EditDataView extends React.Component {
	render() {
		const { data } = this.props;
		console.log(data);

		if (!data) {
			return <div>No data found! Upload some data first.</div>;
		}

		const headings = data[0];

		return (
			<div>
				<table>
					<thead>
						<tr>
							{headings.map((item) => {
								return <th>{item}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((row, index) => {
							if (index !== 0) {
								return (
									<tr>
										{row.map((cell) => {
											return <td>{cell}</td>;
										})}
									</tr>
								);
							} else {
								return null;
							}
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default EditDataView;
