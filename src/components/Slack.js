import React, { Component } from 'react';
import { Sidebar, MainContainer } from './';

class Slack extends Component {
	render() {
		const data = [];
		return (
			<div id="slack">
				<Sidebar data={data} />
				<MainContainer />
			</div>
		);
	}
}

export default Slack;
