import React from 'react';

import LocalStorage from './helpers/localStorage';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import calculateScores from './helpers/calculateScores';
import sortArray from './helpers/sortArray';
import totalWeights from './helpers/totalWeights';

import statusRef from './mappingFunctions/statusRef';
import copyValue from './mappingFunctions/copyValue';

import './styles/App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentView: 'home',
			fileName: null,
			rawData: null,
			processedData: null,
			functionMapping: {
				id: { algorithm: `return value;`, weight: null },
				title: { algorithm: `return value;`, weight: null },
				writer: { algorithm: `return value;`, weight: null },
				statusRef: {
					algorithm: `let score = 0;
				if (value === 'awaiting-final-proof') {
					score = 10;
				}
				if (value === 'ready-for-internal-review') {
					score = 5;
				}
				if (value === 'ready-to-go-live') {
					score = 1;
				}
				if (value === 'started') {
					score = 3;
				}
			
				return score;`,
					weight: 2,
				},
				isSnapshot: { algorithm: `return value;`, weight: 1 },
				totalWeight: 3,
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
		document.title = 'Internal Review Priorities';
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
			functionMapping: this.state.functionMapping,
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

	updateFunctionMapping = (category, field, value) => {
		this.setState(
			{
				functionMapping: {
					...this.state.functionMapping,
					[category]: {
						...this.state.functionMapping[category],
						[field]: value,
					},
				},
			},
			() => {
				const total = totalWeights(this.state.functionMapping);
				this.setState({
					functionMapping: {
						...this.state.functionMapping,
						totalWeight: total,
					},
				});
			}
		);
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
					fileName={this.state.fileName}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
