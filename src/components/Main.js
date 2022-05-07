import React from 'react';
import Home from './Home';
import UploadDataView from './UploadDataView';
import EditDataView from './EditDataView';
import OutputView from './OutputView';
import Settings from './Settings';

class Main extends React.Component {
	render() {
		const { view, data } = this.props;
		return (
			<main>
				{
					{
						home: <Home />,
						upload: (
							<UploadDataView
								changeFile={this.props.changeFile}
							/>
						),
						edit: <EditDataView data={data} />,
						output: <OutputView />,
						settings: <Settings />,
					}[view]
				}
			</main>
		);
	}
}

export default Main;
