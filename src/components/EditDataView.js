import React from 'react';
import uniqid from 'uniqid';

import '../styles/EditData.css';

class EditDataView extends React.Component {
	constructor(props) {
		super(props);

		this.state = null;
	}

	handleChange = (e) => {
		const row = e.target.dataset.row;
		const col = e.target.dataset.col;

		let data = this.props.data;
		data[row][col] = e.target.innerText;

		this.props.updateRawData(data);
	};

	render() {
		const { data } = this.props;

		if (!data) {
			return <div>No data found! Upload some data first.</div>;
		}

		const headings = data[0];

		return (
			<div>
				<h1>Edit Data</h1>
				<div>
					<button
						type='button'
						onClick={() => {
							this.props.updateProcessedData();
						}}
					>
						Calulate Priotities
					</button>
				</div>
				<table>
					<thead>
						<tr>
							{headings.map((item) => {
								return <th key={uniqid()}>{item}</th>;
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((row, rowIndex) => {
							if (rowIndex !== 0) {
								return (
									<tr key={uniqid()}>
										{row.map((cell, cellIndex) => {
											return (
												<td
													key={uniqid()}
													contentEditable='true'
													suppressContentEditableWarning={
														true
													}
													onBlur={this.handleChange}
													data-row={rowIndex}
													data-col={cellIndex}
												>
													{cell}
												</td>
											);
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
