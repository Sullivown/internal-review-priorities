import React from 'react';
import uniqid from 'uniqid';
import OutputTableHeading from './OutputTableHeading';

import '../styles/Output.css';
import OutputTableCell from './OutputTableCell';

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
								return (
									<OutputTableHeading
										key={uniqid()}
										item={item}
										functionMapping={
											this.props.functionMapping
										}
										updateFunctionMapping={
											this.props.updateFunctionMapping
										}
									/>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{data.map((row, rowIndex) => {
							if (rowIndex !== 0) {
								return (
									<tr key={uniqid()}>
										{row.map((cell, cellIndex) => (
											<OutputTableCell
												key={uniqid()}
												cell={cell}
												rowIndex={rowIndex}
												cellIndex={cellIndex}
											/>
										))}
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
