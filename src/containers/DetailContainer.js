import React, { Component } from 'react';
import { connect } from 'react-redux';
import Details from './../components/Detail/Details';
import Detail from './../components/Detail/Detail';


import axios from 'axios';

// let {match} =this.props;
// let id=match.params.id;
class DetailContainer extends Component {


	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			category: []
		};
	}
	//was call after component render the first time
	componentDidMount() {

		axios({
			method: 'GET',
			url: 'http://5b3c2ed6e7659e00149695f4.mockapi.io/categories/'+ this.props.match.params.id +'/posts',
			data: null
		}).then(res => {
			console.log(res);

			this.setState({
				posts: res.data,

			})
			console.log(res.data)
		}).catch(err => {
			console.log(err);
		});
	}
	render() {
		var { posts } = this.state;

		return (
			<Details>
				{this.showPost(posts)}
			</Details>

		);
	}
	showPost = (posts) => {
		var result = null;
		if (posts.length > 0) {
			result = posts.map((post, index) => {
				return <Detail
					key={index}
					post={post}
				/>


			});
		}
		return result;
	}


}

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(DetailContainer);
