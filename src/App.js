import React from 'react';

import LocalStorage from './helpers/localStorage';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import calculateScores from './helpers/calculateScores';
import sortArray from './helpers/sortArray';

import statusRef from './mappingFunctions/statusRef';
import copyValue from './mappingFunctions/copyValue';

import './styles/App.css';

const scoringFunctions = {
	statusRef,
	copyValue,
};

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentView: 'home',
			fileName: null,
			rawData: null,
			processedData: null,
			functionMapping: {
				id: { algorithm: copyValue, weight: null },
				title: { algorithm: copyValue, weight: null },
				writer: { algorithm: copyValue, weight: null },
				statusRef: { algorithm: statusRef, weight: 2 },
				isSnapshot: { algorithm: copyValue, weight: 1 },
			},
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

	componentDidMount() {
		const localData = LocalStorage.initialise();
		this.setState(localData);
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.functionMapping !== prevState.functionMapping) {
			this.updateProcessedData();
		}

		if (this.state.rawData !== prevState.rawData) {
			this.setState({ fileName: this.state.fileName });
		}

		LocalStorage.update({
			fileName: this.state.fileName,
			rawData: this.state.rawData,
			processedData: this.state.processedData,
		});
	}

	handleChange = (key, value) => {
		this.setState({
			[key]: value,
		});
	};

	updateProcessedData = () => {
		if (!this.state.rawData) {
			return;
		}
		const processedData = calculateScores(
			this.state.rawData,
			this.state.functionMapping
		);
		this.setState({ processedData: processedData });
	};

	updateFunctionMapping = (e) => {
		this.setState(() => ({
			functionMapping: {
				...this.state.functionMapping,
				[e.target.dataset.key]: {
					...this.state.functionMapping[e.target.dataset.key],
					weight: parseFloat(e.target.value),
				},
			},
		}));
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
					updateProcessedData={this.updateProcessedData}
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
					scoringFunctions={scoringFunctions}
					fileName={this.state.fileName}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
