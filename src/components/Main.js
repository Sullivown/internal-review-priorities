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
		} = this.props;
		return (
			<main>
				{
					{
						home: <Home />,
						upload: (
							<UploadDataView
								updateRawData={handleChange}
								changeView={handleChange}
							/>
						),
						edit: (
							<EditDataView
								data={rawData}
								updateRawData={handleChange}
								handleChange={handleChange}
								updateProcessedData={updateProcessedData}
							/>
						),
						output: <OutputView data={processedData} />,
						settings: <Settings />,
					}[view]
				}
			</main>
		);
	}
}

export default Main;
