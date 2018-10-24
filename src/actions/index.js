import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';



export const actFetchCategoriesRequest = () => {
    return (dispatch) => {
        return callApi('/categories', 'GET', null).then(res => {
            dispatch(actFetchCategories(res.data));
        });
    }
}

export const actFetchCategories = (categories) => {
    return {
        type: Types.FETCH_CATEGORIES,
        categories
    }
}



let loggedInUser = localStorage.getItem('users');
let logg = JSON.parse(loggedInUser);
// console.log(logg.name,"thammmmmmmmmmmm")
let user=logg.name;
// console.log(a,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
export const actFetchPostsRequest = () => {
    return (dispatch) => {
        return callApi(`/categories/1/posts?filter=${user}`, 'GET', null).then(res => {
            dispatch(actFetchPosts(res.data));
        });
    }
}

export const actFetchPosts = (posts) => {
    return {
        type: Types.FETCH_POSTS,
        posts
    }
}

export const actAddPostRequest = (post,id) => {
    return (dispatch) => {
        return callApi(`/categories/${id}/posts`, 'POST', post).then(res => {
            dispatch(actAddPost(res.data));
            console.log("sjjjjjjjjj",id)
        });
    }
}

export const actAddPost = (post) => {
    return {
        type: Types.ADD_POST,
        post,
        
    }
}

export const actUpdatePostRequest = (post,id) => {
    // console.log("iddddddddddddd",id)
    return (dispatch) => {
        return callApi(`/categories/${id}/posts/${post.id}`, 'PUT', post).then(res => {
            if (res) {
                dispatch(actUpdatePost(res.data));
                console.log("iddddddddddddd",id)
            }
        });
    }
}

export const actUpdatePost = (post,id) => {
    return {
        type: Types.UPDATE_POST,
        post
    }
}

export const actDeletePostRequest = (id) => {
    return (dispatch) => {
        return callApi(`/categories/1/posts/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeletePost(id));
        });
    }
}

export const actDeletePost = (id) => {
    return {
        type: Types.DELETE_POST,
        id
    }
}

export const actGetPostRequest = (id) => {
    return dispatch => {
        return callApi(`/categories/1/posts/${id}`, 'GET', null).then(res => {
            dispatch(actGetPost(res.data))
        });
    }
}

export const actGetPost = (post) => {
    return {
        type : Types.EDIT_POST,
        post
    }
}


// ============================================
export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('/users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data));
        });
    }
}

export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}

export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return callApi('/users', 'POST', user).then(res => {
            dispatch(actAddUser(res.data));
        });
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const actUpdateUserRequest = (user) => {
    return (dispatch) => {
        return callApi(`/users/${user.id}`, 'PUT', user).then(res => {
            if (res) {
                dispatch(actUpdateUser(res.data));
            }
        });
    }
}

export const actUpdateUser = (user) => {
    return {
        type: Types.UPDATE_USER,
        user
    }
}

export const actGetUserRequest = (id) => {
    return dispatch => {
        return callApi(`users${id}`, 'GET', null).then(res => {
            dispatch(actGetUser(res.data))
        });
    }
}
export const actGetUser = (user) => {
    return {
        type : Types.EDIT_USER,
        user
    }
}
