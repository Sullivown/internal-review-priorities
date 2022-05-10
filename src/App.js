import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import calculateScores from './helpers/calculateScores';

import statusRef from './mappingFunctions/statusRef';
import copyValue from './mappingFunctions/copyValue';

import './styles/App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentView: 'home',
			rawData: null,
			functionMapping: {
				id: copyValue,
				title: copyValue,
				writer: copyValue,
				statusRef: statusRef,
				isShapshot: null,
			},
			processedData: null,
		};

		this.changeView = this.changeView.bind(this);
		this.updateRawData = this.updateRawData.bind(this);
		this.updateProcessedData = this.updateProcessedData.bind(this);
	}

	changeView = (view) => {
		this.setState({
			currentView: view,
		});
	};

	updateRawData = (data) => {
		this.setState({
			rawData: data,
		});
	};

	updateProcessedData = () => {
		const processedData = calculateScores(
			this.state.rawData,
			this.state.functionMapping
		);
		this.setState({ processedData: processedData });
	};

	render() {
		return (
			<div className='App'>
				<Header handleClick={this.changeView} />
				<Main
					view={this.state.currentView}
					changeView={this.changeView}
					rawData={this.state.rawData}
					updateRawData={this.updateRawData}
					processedData={this.state.processedData}
					updateProcessedData={this.updateProcessedData}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
