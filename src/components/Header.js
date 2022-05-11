import React from 'react';
import NavButton from './NavButton';

import '../styles/Header.css';

class Header extends React.Component {
	render() {
		const { currentView, handleClick } = this.props;

		return (
			<header>
				<h1>Internal Review Priorities</h1>
				<nav>
					<ul>
						<li>
							<NavButton
								page='Home'
								currentView={currentView}
								handleClick={handleClick}
							/>
						</li>
						<li>
							<NavButton
								page='Upload'
								currentView={currentView}
								handleClick={handleClick}
							/>
						</li>
						<li>
							<NavButton
								page='Edit'
								currentView={currentView}
								handleClick={handleClick}
							/>
						</li>
						<li>
							<NavButton
								page='Output'
								currentView={currentView}
								handleClick={handleClick}
								updateProcessedData={
									this.props.updateProcessedData
								}
							/>
						</li>
						<li>
							<NavButton
								page='Settings'
								currentView={currentView}
								handleClick={handleClick}
							/>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
