import React from 'react';
import ReactToPrint from 'react-to-print';

import OutputTable from './OutputTable';

import '../styles/Output.css';

class OutputView extends React.Component {
	render() {
		const { data } = this.props;

		if (!data) {
			return (
				<div>No data found! Upload and process some data first.</div>
			);
		}

		return (
			<div id='output-view'>
				<h1>Output</h1>
				<ReactToPrint
					trigger={() => {
						// NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
						// to the root node of the returned component as it will be overwritten.
						return <button>Print / Save .PDF</button>;
					}}
					content={() => this.componentRef}
				/>
				<OutputTable
					data={data}
					handleChange={this.props.handleChange}
					functionMapping={this.props.functionMapping}
					updateFunctionMapping={this.props.updateFunctionMapping}
					sortStatus={this.props.sortStatus}
					sortData={this.props.sortData}
					ref={(el) => (this.componentRef = el)}
				/>
			</div>
		);
	}
}

export default OutputView;
