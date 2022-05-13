import React from 'react';
import uniqid from 'uniqid';
import OutputTableHeading from './OutputTableHeading';

import '../styles/Output.css';
import OutputTableCell from './OutputTableCell';

class OutputView extends React.Component {
	render() {
		const { data } = this.props;

		if (!data) {
			return (
				<div>No data found! Upload and process some data first.</div>
			);
		}

		const headings = data[0];
		const headingsArr = headings.map((item) => {
			return (
				<OutputTableHeading
					key={uniqid()}
					item={item}
					handleChange={this.props.handleChange}
					functionMapping={this.props.functionMapping}
					updateFunctionMapping={this.props.updateFunctionMapping}
					sortData={this.props.sortData}
					sortStatus={this.props.sortStatus}
				/>
			);
		});

		const bodyArr = data.map((row, rowIndex) => {
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
		});

		return (
			<div id='output-view'>
				<h1>Output</h1>
				<table>
					<thead>
						<tr>{headingsArr}</tr>
					</thead>
					<tbody>{bodyArr}</tbody>
				</table>
			</div>
		);
	}
}

export default OutputView;
