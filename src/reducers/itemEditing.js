import * as Types from './../constants/ActionType';
var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_POST:
            return action.post;
        default :
            return state;
    }
}

export default itemEditing;