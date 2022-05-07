import React from 'react';

import '../styles/Header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>Internal Review Priorities</h1>
				<nav>
					<ul>
						<li>
							<button
								onClick={this.props.handleClick}
								data-view='home'
							>
								Home
							</button>
						</li>
						<li>
							<button
								onClick={this.props.handleClick}
								data-view='upload'
							>
								Upload
							</button>
						</li>
						<li>
							<button
								onClick={this.props.handleClick}
								data-view='edit'
							>
								Edit Data
							</button>
						</li>
						<li>
							<button
								onClick={this.props.handleClick}
								data-view='output'
							>
								View Output
							</button>
						</li>
						<li>
							<button
								onClick={this.props.handleClick}
								data-view='settings'
							>
								Settings
							</button>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;
