import { combineReducers } from 'redux';
import { fetchAllPosts } from './fetchAllPosts';


export default combineReducers({
    lists: fetchAllPosts
})