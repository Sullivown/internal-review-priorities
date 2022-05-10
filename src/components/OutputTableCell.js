import React from 'react';

class OutputTableCell extends React.Component {
	render() {
		return (
			<td data-row={this.props.rowIndex} data-col={this.props.cellIndex}>
				{this.props.cell}
			</td>
		);
	}
}

export default OutputTableCell;
