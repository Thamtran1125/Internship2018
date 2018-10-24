import React, { Component } from 'react';

class UserList extends Component {

    render() {
        return (
           <div>
					 	<h2>Thông tin Tài Khoản</h2>
                        <tbody>
                            {this.props.children}
                  
            </div>
        );
    }

}

export default UserList;
