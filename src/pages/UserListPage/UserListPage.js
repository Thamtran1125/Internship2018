import React, { Component } from 'react';
// import './PostListPage.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import UserList from './../../components/UserList/UserList';
import UserItem from './../../components/UserItem/UserItem';
import { actFetchUsersRequest,actUpdateUsersRequest } from '../../actions/index';

class UserListPage extends Component {

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllUsers();
    }

    render() {

        let { users } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/post/add" className="btn btn-primary mb-5">
                            <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>
                        <PostList>
                            {this.showUsers(users)}
                        </PostList>
                    </div>
                </div>
            </div>
        );
    }

    showPosts(users) {
        let result = null;
        if (users.length > 0) {
            result = users.map((user, index) => {
                return <UserItem user={user} key={index} index={index}} />
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(actFetchUsersRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
