import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css.css';
class UserItem extends Component {

	
	render() {
		let { user, index } = this.props;

		return (
		
						<form className="form-horizontal" action="/action_page.php">
							<div className="form-group" >
								<label className="control-label col-sm-5">Tên Tài Khoản:</label>
								<div className="col-sm-7" >
									<input type="text" className="form-control" disabled="false" />{user.name}
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-5" >Email:</label>
								<div className="col-sm-7">
									<input type="text" className="form-control" disabled="false" /> {user.email}
								</div>
							</div>
							<div className="form-group btn" style={{ paddingTop: "40px" }} >
								<div className="col-md-6">
									<button type="button" class="btn btn-info">Cập Nhật</button>
								</div>
								<div className="col-md-6">
									<button type="button" class="btn btn-info">Đăng Xuất</button>
								</div>
							</div>


						</form>
					{/* <Link  to={`/posts/${post.id}/edit`} className="btn btn-info mr-5">
						<i className="glyphicon glyphicon-edit"></i> Sửa
           </Link>
					<button type="button" className="btn btn-danger" onClick={() => this.onDelete(post.id)}>
						<i className="glyphicon glyphicon-trash"></i> Xóa */}
           {/* </button> */}
			
		);
	}
}

export default UserItem;
