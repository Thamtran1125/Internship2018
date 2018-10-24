import * as Types from './../constants/ActionType';

var initialState = [];

const categories = (state = initialState, action) => {
    // let { categories } = action;
    // var index = -1;
    switch (action.type) {
        case Types.FETCH_CATEGORIES:
            return [...action.categories];
      
        default: return [...state];
    }
};

export default categories;