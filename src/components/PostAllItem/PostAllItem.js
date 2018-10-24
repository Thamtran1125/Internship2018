import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './css1.css';
class PostItem extends Component {

	render() {
		let { post, index } = this.props;

		return (
			<tr>
				<td>{index + 1}</td>
				<td>{post.title}</td>
				<td>{post.content}</td>
				<td>
				<td>{post.userId}</td>
				</td>
				
			</tr>
		);
	}
}

export default PostItem;
