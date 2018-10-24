import * as Types from './../constants/ActionType';

let initialState = [];

const users = (state = initialState, action) => {
    let { user } = action;
    // let index = -1;
    switch (action.type) {
        case Types.FETCH_USERS:
            return [...action.users];
        case Types.ADD_USER:
            state.push(user);
            return [...state];
        // case Types.UPDATE_POST:
        //     index = findIndex(state, post.id);
        //     state[index] = post;
        //     return [...state];
        // case Types.DELETE_POST:
        //     index = findIndex(state, id);
        //     state.splice(index, 1);
        //     return [...state];
        default: return [...state];
    }
};

// let findIndex = (users, id) => {
//     let result = -1;
//     users.forEach((user, index) => {
//         if (user.id === id) {
//             result = index;
//         }
//     });
//     return result;
// }

export default users;