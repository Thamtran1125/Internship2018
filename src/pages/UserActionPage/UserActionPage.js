import React, { Component } from 'react';

import { connect } from 'react-redux';
import { actAddUserRequest, actUpdateUserRequest, actGetUserRequest } from '../../actions/index';
// import Files from 'react-files';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
class UserActionPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			txtUserName: '',
			txtEmail: '',
			txtPassword: '',

		};
	}

	componentWillMount() {
		let { match } = this.props;
		if (match) { // update
			let id = match.params.id;
			this.props.onEditUser(id)
		} // else => add
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.itemEditing) {
			let { itemEditing } = nextProps;
			this.setState({
				id: itemEditing.id,
				txtUserName: itemEditing.name,
				txtEmail: itemEditing.email,
				txtPassword: itemEditing.password,

			})
		}
	}


	onChange = (e) => {
		let target = e.target;
		let name = target.name;

		let value = target.value;
		this.setState({
			[name]: value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		let { id, txtUserName, txtEmail, txtPassword } = this.state;
		let user = {
			id: id,
			name: txtUserName,
			email: txtEmail,
			password: txtPassword,

		};
		if (id) {
			this.props.onUpdateUser(user);
		} else {
			this.props.onAddUser(user);
		}
		this.props.history.goBack();
	}

	onFilesChange = (files) => {
		console.log(files)
	}
	onFilesError(error, file) {
		console.log('error code ' + error.code + ': ' + error.message)
	}
	render() {
		let { txtUserName, txtEmail, txtPassword } = this.state;
		return (

			<div>
				<Header />
				<main id="mainContainer">
					<div className="container">
						<div className="row" style={{ paddingBottom: "100px", paddingLeft: "400px", paddingTop: "200px" }}>
							<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<form onSubmit={this.onSubmit}>
									<legend>* Vui lòng nhập đầy đủ thông tin</legend>
									<div className="form-group">
										<label>Tên Đăng Nhập: </label>
										<input onChange={this.onChange} value={txtUserName} name="txtUserName" type="text" className="form-control" required="true" />
									</div>
									<div className="form-group">
										<label>Email: </label>
										<input type="email" onChange={this.onChange} value={txtEmail} name="txtEmail" className="form-control" rows="3" required="true">
										</input>
									</div>
									<div className="form-group">
										<label>Password: </label>
										<input onChange={this.onChange} value={txtPassword} name="txtPassword" type="text" className="form-control" required="true" />
									</div>

									<button type="submit" className="btn btn-primary">
										<i className="glyphicon glyphicon-save"></i> Lưu Lại
                            </button>
								</form>
							</div>
						</div>
					</div>
				</main >
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		itemEditing: state.itemEditing
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddUser: (user) => {
			dispatch(actAddUserRequest(user));
		},
		onUpdateUser: (user) => {
			dispatch(actUpdateUserRequest(user));
		},
		onEditUser: (id) => {
			dispatch(actGetUserRequest(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionPage);
