import React, { Component } from 'react';
import './PostListPage.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PostList from './../../components/PostList/PostList';
import PostItem from './../../components/PostItem/PostItem';
import { actFetchPostsRequest,actUpdatePostRequest, actDeletePostRequest } from '../../actions/index';

class PostListPage extends Component {

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllPosts();
    }

    render() {

        let { posts } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/post/add" className="btn btn-primary mb-5">
                            <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>
                        <PostList>
                            {this.showPosts(posts)}
                        </PostList>
                    </div>
                </div>
            </div>
        );
    }

    showPosts(posts) {
        let result = null;
        let { onDeletePost} = this.props;
        if (posts.length > 0) {
            result = posts.map((post, index) => {
                return <PostItem post={post} key={index} index={index} onDeletePost={onDeletePost} />
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosts: () => {
            dispatch(actFetchPostsRequest());
        },
        onDeletePost: (id) => {
            dispatch(actDeletePostRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);
