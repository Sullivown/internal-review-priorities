import React from 'react';
import Home from './Home';
import UploadDataView from './UploadDataView';
import EditDataView from './EditDataView';
import OutputView from './OutputView';
import Settings from './Settings';

import '../styles/Main.css';

class Main extends React.Component {
	render() {
		const {
			view,
			rawData,
			handleChange,
			processedData,
			updateProcessedData,
			functionMapping,
			updateFunctionMapping,
			sortStatus,
			sortData,
			fileName,
		} = this.props;
		return (
			<main>
				{
					{
						home: <Home />,
						upload: (
							<UploadDataView
								handleChange={handleChange}
								fileName={fileName}
							/>
						),
						edit: (
							<EditDataView
								data={rawData}
								updateRawData={handleChange}
								handleChange={handleChange}
								updateProcessedData={updateProcessedData}
								sortStatus={sortStatus}
								sortData={sortData}
							/>
						),
						output: (
							<OutputView
								data={processedData}
								handleChange={handleChange}
								functionMapping={functionMapping}
								updateFunctionMapping={updateFunctionMapping}
								sortStatus={sortStatus}
								sortData={sortData}
							/>
						),
						settings: (
							<Settings
								functionMapping={functionMapping}
								updateFunctionMapping={updateFunctionMapping}
							/>
						),
					}[view]
				}
			</main>
		);
	}
}

export default Main;
