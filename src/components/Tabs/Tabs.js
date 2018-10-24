import React, { Component } from 'react';
class Tabs extends Component {
	render() {
		return (
			<div>
			
				{this.props.children}
				
			</div>
		);
	}

}

export default Tabs;
