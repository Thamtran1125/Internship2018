import * as Types from './../constants/ActionType';

let initialState = [];

const posts = (state = initialState, action) => {
    let { post, id } = action;
    let index = -1;
    switch (action.type) {
        case Types.FETCH_POSTS:
            return [...action.posts];
        case Types.ADD_POST:
            state.push(post);
            return [...state];
        case Types.UPDATE_POST:
            index = findIndex(state, post.id);
            state[index] = post;
            return [...state];
        case Types.DELETE_POST:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

let findIndex = (posts, id) => {
    let result = -1;
    posts.forEach((post, index) => {
        if (post.id === id) {
            result = index;
        }
    });
    return result;
}

export default posts;