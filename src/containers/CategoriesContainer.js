import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './../components/Categories/Categories';
import Category from './../components/Categories/Category';


import axios from 'axios';

class CategoriesContainer extends Component {


	
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};
	}
	
	//was call after component render the first time
	componentDidMount() {

		axios({
			method: 'GET',
			url: 'http://5b3c2ed6e7659e00149695f4.mockapi.io/categories',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				categories: res.data
			})

		}).catch(err => {
			console.log(err);
		});
	}
	render() {
		let { categories } = this.state;

		return (
			<Categories>
				{this.showCategories(categories)}
			</Categories> 
		
		);
	}

	showCategories = (categories) => {
		let result = null;
		if (categories.length > 0) {
			result = categories.map((category, index) => {
				return <Category
					key={index}
					category={category}
				/>
				

			});
		}
		return result;
	}
	

}

const mapStateToProps = state => {
	return {
		categories: state.categories
	}
}

export default connect(mapStateToProps)(CategoriesContainer);
