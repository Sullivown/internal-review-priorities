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
				id: { algorithm: copyValue, weight: null },
				title: { algorithm: copyValue, weight: null },
				writer: { algorithm: copyValue, weight: null },
				statusRef: { algorithm: statusRef, weight: 1 },
				isSnapshot: { algorithm: copyValue, weight: 1 },
			},
			processedData: null,
		};

		this.handleChange = this.handleChange.bind(this);
		this.updateProcessedData = this.updateProcessedData.bind(this);
	}

	handleChange = (key, value) => {
		this.setState({
			[key]: value,
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
				<Header
					currentView={this.state.currentView}
					handleClick={this.handleChange}
				/>
				<Main
					view={this.state.currentView}
					handleChange={this.handleChange}
					rawData={this.state.rawData}
					processedData={this.state.processedData}
					updateProcessedData={this.updateProcessedData}
					functionMapping={this.state.functionMapping}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
