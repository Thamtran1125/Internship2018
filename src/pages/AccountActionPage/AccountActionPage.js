// them sua xoa sp
import React, { Component } from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import _ from 'lodash';
// import {find} from 'lodash';
import md5 from 'md5';
import axios from 'axios'
import Value from './../../components/Values/Value';
// import TestPage from './../../containers/TestPage';
import PostListPage from './../PostListPage/PostListPage';
class AccountActionPage extends Component {

	
	constructor(props) {
		super(props);
		this.state={
			users :[]
		}
	}
	logout(){
		return(
		localStorage.clear('user'),
		alert("Bạn đã đăng xuất")
		);
	}

	//was call after component render the first time
	 componentDidMount() {
 
		 axios({
			 method: 'GET',
			 url: 'http://5b3c2ed6e7659e00149695f4.mockapi.io/users',
			 data: null
		 }).then(res => {
			 console.log(res);
			 
			 this.setState({
				 users: res.data,
				 
				  
			 })
		
 
		 }).catch(err => {
			 console.log(err);
		 });
		 
	 }
	 
	render() {
		// let {location} =this.props;
		let {users} =this.state;
		// let{posts} = this.props;
		// console.log("test",users);
	
		let loggedInUser= localStorage.getItem('users');
		let logg = JSON.parse(loggedInUser);
		let result= _.find(users, { 'name': logg.name, 'password': logg.password });
	
	
		// console.log('result',result)
		// if(result){
				// this.state={
						
				// 		name:logg.name,
				// 		password: logg.password,
						
				// 	}
					// console.log(this.state.name,"hihihihihihi")
					// let result= _.find(posts, { 'name': logg.name, 'password': logg.password });
			  // for (let index = 0; index < users.length; index++) {
				
          //       if (logg.name === users[index].name){
					// console.log("id users",users[index].id)     

	
		
	


		return (
			<div>
				<Header  />
				<div className="account" style={{ paddingTop: "130px", paddingBottom: "300px" }}>
					<div className="col-md-3" style={{ paddingTop: "95px", paddingBottom: "300px" }}>
						<form className="form-horizontal" action="/action_page.php">
							<div className="form-group" >
								<label className="control-label col-sm-5">Tên Tài Khoản:</label>
								<div className="col-sm-7" >
									<input type="text" className="form-control" disabled="false" value={logg.name}/>
								</div>
							</div>
							<div className="form-group">
								<label className="control-label col-sm-5" >Mật Khẩu:</label>
								<div className="col-sm-7">
									<input type="text" className="form-control" disabled="false" value={md5(logg.password)} /> 
								</div>
							</div>
							<div className="form-group btn" style={{ paddingTop: "40px" }} >
								<div className="col-md-6">
									<button type="button" className="btn btn-info">Cập Nhật</button>
								</div>
								<div className="col-md-6">
									<button type="button" className="btn btn-info" onClick={this.logout} >Đăng Xuất</button>
								</div>
							</div>
						</form>
					</div>
					<div className="col-md-9">
						<h3>Những Bài viết của bạn</h3>
					<PostListPage />
					{/* <TestPage />	 */}
					</div>
				</div>
				<Value />
				<Footer />
			</div>
		)

	}
}

export default AccountActionPage;

