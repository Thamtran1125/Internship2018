import React, { Component } from 'react'
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
// import Tabs from './../../components/Tabs/Tabs';
import TestPage from '../../containers/TestPage';
// import TabContainer from './../../containers/TabContainer';
export default class AllPost extends Component {
	render() {
		return (
				<div>
						<Header />
						<main id="mainContainer" style={{marginLeft:"180px",paddingTop:"100px"}} >
								
								{/* <TabContainer /> */}
							<TestPage />
								
						</main >
						<Footer />
				</div>
		)
}
}

