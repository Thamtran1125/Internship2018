import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css.css';
class PostAllItem extends Component {

	onDelete = (id) => {
		if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
			this.props.onDeletePost(id);
		}
	}

	render() {
		let { post, index } = this.props;

		return (
			<tr>
				<td>{index + 1}</td>
				{/* <td>{post.id}</td> */}
				<td>{post.title}</td>
				<td>{post.content}</td>
				<td>
					<Link  to={`/posts/${post.id}/edit`} className="btn btn-info mr-5">
						<i className="glyphicon glyphicon-edit"></i> Sửa
           </Link>
					<button type="button" className="btn btn-danger" onClick={() => this.onDelete(post.id)}>
						<i className="glyphicon glyphicon-trash"></i> Xóa
           </button>
				</td>
			</tr>
		);
	}
}

export default PostAllItem;
