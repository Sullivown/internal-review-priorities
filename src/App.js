import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentView: 'home',
			rawData: null,
			functionMapping: {},
			processedData: null,
		};

		this.changeView = this.changeView.bind(this);
		this.updateRawData = this.updateRawData.bind(this);
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

	updateProcessedData = (data) => {
		console.log(data);
		this.setState({
			processedData: data,
		});
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
