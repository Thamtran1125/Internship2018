import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './../components/PostList/PostList';
import PostAllItem from './../components/PostAllItem/PostAllItem';
// import {Link} from 'react-router-dom'
import axios from 'axios';
import _ from 'lodash';
class TestPage extends Component {



	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			users:[]
		};
	}

	//was call after component render the first time
	componentDidMount() {

		axios({
			method: 'GET',
			url: 'https://www.mockapi.io/api/mocks/5b3c2ed6e7659e00149695f5/resources/5b504f32fe45ed0014cf07ff/data?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1YjNjMmViM2U3NjU5ZTAwMTQ5Njk1ZjMiLCJpYXQiOjE1MzE3MTA3MzMzMDYsImV4cCI6MTUzNDMwMjczMzMwNn0.w098VZVqUF8pBcD6e3YKXZCGgd3ZO05VB-tbjZFjDio',
			data: null
		}).then(res => {
			console.log(res);
			this.setState({
				posts: res.data
			})

		}).catch(err => {
			console.log(err);
		});
	}
	render() {

		let { posts } = this.state;
		let { users } = this.props;
		// // let{posts} = this.props;
		// console.log("ssssssssssssssssss", users);

		let loggedInUser = localStorage.getItem('users');
		// console.log("ttttttttttttttttttttttttttt",loggedInUser)
		let logg = JSON.parse(loggedInUser);
		console.log(logg.name)
		let result = _.find(posts, { 'name': logg.name, 'password': logg.password });


		// console.log('sssssssssssssssssssss', result)
		if (result) {
			this.state = {

				name: logg.name,
				password: logg.password,

			}
			// console.log(this.state.name, "sssssssssssssssssssss")
		}
			return (
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							{/* <Link to="/post/add" className="btn btn-primary mb-5">
					<i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
				</Link> */}
							<PostList>
								{this.showPosts(posts)}
							</PostList>
						</div>
					</div>
				</div>

			);
		}
		showPosts(posts) {
			let result = null;
			let { onDeletePost } = this.props;
			if (posts.length > 0) {
				result = posts.map((post, index) => {
					return <PostAllItem post={post} key={index} index={index} onDeletePost={onDeletePost} />
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

	export default connect(mapStateToProps)(TestPage);
