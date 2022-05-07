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
			currentData: null,
		};

		this.viewChange = this.viewChange.bind(this);
		this.changeFile = this.changeFile.bind(this);
	}

	viewChange = (e) => {
		this.setState({
			currentView: e.target.dataset.view,
		});
	};

	changeFile = (data) => {
		this.setState({
			currentData: data,
		});
	};

	render() {
		return (
			<div className='App'>
				<Header handleClick={this.viewChange} />
				<Main
					view={this.state.currentView}
					changeFile={this.changeFile}
					data={this.state.currentData}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
