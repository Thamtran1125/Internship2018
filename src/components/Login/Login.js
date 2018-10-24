
import React, { Component } from 'react';
import _ from 'lodash';
// import {find} from 'lodash';
import { connect } from 'react-redux';
// import Header from './../Header/Header';
// import Footer from './../Footer/Footer';
import {Link} from 'react-router-dom';
// import {reactLocalStorage} from 'reactjs-localstorage';

import axios from 'axios';
class Login extends Component {
   constructor(props) {
       super(props);
       this.state={
           users :[],
           txtUserName:'',
           txtPass:'',
           isRedirect: false,
           auth: ''
           
       }
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

   onChange = (e) => {
    let target = e.target;
    let name = target.name;

    let value = target.value;
    this.setState({
        [name]: value
    });
}
   onLogin= (e)=>{
   e.preventDefault();
    // alert(this.state.txtUserName);

    let {txtUserName,txtPass} =this.state;
    let {users} =this.state;
    let result= _.find(users, { 'name': txtUserName, 'password': txtPass });
    // console.log('result', result)
    
    if(result){
        localStorage.setItem('users',JSON.stringify({
            name:txtUserName,
            password:txtPass
        }))

        let loggedInUser=JSON.stringify(localStorage.getItem('users'));
        
         if(loggedInUser !==null){
            this.props.history.push('/account')
            // for (let index = 0; index < users.length; index++) {
            //     if (txtUserName === users[index].name && users[index].auth === 1) {
            //         this.props.history.push('/account')
            //     }
            //     if (txtUserName === users[index].name && users[index].auth === 2) {
            //         this.props.history.push('/userpage')
            //     }
            // }
            
        }     
    } else {
        alert("Vui lòng nhập đúng tài khoản và mật khẩu")
    }
  
   }
  	
    render() {
        let {txtUserName,txtPass}= this.state;

       
        return (
            <div className="container">
          {/* <Header /> */}
          {/* {isRedirect && (<Redirect to="/account" />)} */}

          <div className="row" style={{paddingTop:"200px", paddingLeft:"400px", paddingBottom:"50px"}}>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
              <form onSubmit={this.onLogin}>
                  <legend>Đăng Nhập</legend>
              
                  <div className="form-group">
                      <label >Username</label>
                      <input type="text" 
                      className="form-control" 
                      id="" placeholder="Input field"
                       name="txtUserName"
                       value={txtUserName}
                       onChange={this.onChange}
                       />
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="Password" 
                      className="form-control" 
                      id="" placeholder="Input field"
                       name="txtPass"
                       value={txtPass}
                       onChange={this.onChange}
                        />
                  </div>
                  
              
                  <button type="submit" className="btn btn-primary" style={{marginBottom:"25px"}}>Đăng Nhập</button>
                  <br />
                 <Link to="/register">Bạn Chưa Có Tài Khoản</Link>
              </form>
              
                  
              </div>
          </div>
          {/* <Footer /> */}
          </div>
           
        );
    }

}


const mapStateToProps = state => {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(Login);


