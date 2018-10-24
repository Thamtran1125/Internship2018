import React, { Component } from 'react';
import { Route,Link} from 'react-router-dom';

const menus = [
{
    name : "Trang Chủ",
    to : '/',
    exact : true
},
{
    name : "Xem Chi Tiết",
    to : '/list',
    exact : false
},

{
    name : "Tài Khoản",
    to : '/account',
    exact : false
},
];

const MenuLink =({lable,to, activeOnlyWhenActive}) =>{
    return(
        <Route 
            path = {to}
            exact = {activeOnlyWhenActive}
            children = {({ match}) => {
                let active = match ? 'active' : '';
                return (
                    <li className={active}>
                      <Link to={to}>
                      {lable}
                      </Link>
                    </li>
                );
            }}        
        />
    )
}
export default class Menu extends Component {
    render() {
        
        return (
                <div>
                    <div className="nav-holder main-menu">
                        <nav>
                            <ul>
                               {this.showMenus(menus)}

                            </ul>
                        </nav>
                       
                    </div>
                </div>
        )
    }
    showMenus = () =>{
        let result = null;
        if(menus.length > 0){
            result = menus.map((menu,index) => {
                return (
                    <MenuLink 
                     key = {index}
                     lable = {menu.name}
                     to = {menu.to}
                     activeOnlyWhenActive = {menu.exact}
                    />
                );
            })
        }

        return result;
    }

}

