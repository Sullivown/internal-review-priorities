import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import calculateScores from './helpers/calculateScores';
import sortArray from './helpers/sortArray';

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
				statusRef: { algorithm: statusRef, weight: 2 },
				isSnapshot: { algorithm: copyValue, weight: 1 },
			},
			processedData: null,
			sort: {
				metric: 'total',
				desc: true,
			},
		};

		this.handleChange = this.handleChange.bind(this);
		this.updateProcessedData = this.updateProcessedData.bind(this);
		this.updateFunctionMapping = this.updateFunctionMapping.bind(this);
		this.sortData = this.sortData.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.functionMapping !== prevState.functionMapping) {
			this.updateProcessedData();
		}
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

	updateFunctionMapping = (data) => {
		this.setState(() => ({
			functionMapping: {
				...this.state.functionMapping,
				[data.key]: {
					...this.state.functionMapping[data.key],
					weight: parseInt(data.value),
				},
			},
		}));
		console.log(this.state.functionMapping);
		this.updateProcessedData();
	};

	sortData = () => {
		const sorted = sortArray(
			this.state.processedData,
			this.state.sort.metric,
			this.state.sort.desc
		);
		this.setState({ sortedData: sorted });
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
					updateFunctionMapping={this.updateFunctionMapping}
					sortData={this.sortData}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
