import React, { Component } from 'react';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';
// import Login from './../../Login/Login';
// import Search from './../Search/Search'
class Header extends Component {
    constructor(props) {
    super(props);
    this.state={
      keywork: ''
    }
  }
  render() {
    //  let loggedInUser=localStorage.getItem('user');
    //  alert(loggedInUser)
    return (
      <header className="main-header dark-header fs-header sticky">
        <div className="header-inner">
          <div className="logo-holder">
            <img src="images/logo1.png" alt="" />
            <div className="search-container">
              {/* <Search /> */}
            </div>
          </div>
        </div>
        <Link to='/post-add' className="add-list">Add Listing <span><i className="fa fa-plus" /></span></Link>
       <Link to="/login"> 
       <div className="show-reg-form modal-open">
       {/* <i className="fa fa-sign-in" />{this.props.namePage}</div>  */}
       <i className="fa fa-sign-in" />Sign in</div> 
       </Link>
         
       {/* <Link to="/login">  */}
       <div className="show-reg-form modal-open">

       <i className="fa fa-sign-in" />Goggle</div> 
      
       
       {/* </Link> */}
        <div className="nav-button-wrap color-bg">
          <div className="nav-button">
            <span /><span /><span />
          </div>
        </div>
        <Menu />
      </header>
    );
  }
}
export default Header;
