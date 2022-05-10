import React from 'react';
import uniqid from 'uniqid';

class OutputView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			initialising: true,
		};
	}
	render() {
		const { data } = this.props;

		if (!data) {
			return (
				<div>No data found! Upload and process some data first.</div>
			);
		}

		const headings = data[0];

		return (
			<div>
				<h1>Output</h1>
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

export default OutputView;
