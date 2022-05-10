import React from 'react';

class NavButton extends React.Component {
	render() {
		return (
			<button
				onClick={(e) =>
					this.props.handleClick('currentView', e.target.dataset.view)
				}
				data-view={this.props.page.toLowerCase()}
				className={
					this.props.currentView === this.props.page.toLowerCase()
						? 'selected'
						: null
				}
			>
				{this.props.page}
			</button>
		);
	}
}

export default NavButton;
