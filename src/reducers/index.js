import { combineReducers } from 'redux';
import posts from './posts';
import categories from './categories';
import users from'./users'
import itemEditing from './itemEditing';

const appReducers = combineReducers({
    posts,
    categories,
    itemEditing,
    users
});

export default appReducers;