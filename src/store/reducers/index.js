import {combineReducers} from 'redux';

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'posts/fetchPosts':
            return action.payload;
        case 'posts/searchPosts':
            return state.filter(post => post.title.includes(action.payload) || post.body.includes(action.payload));
        default:
            return state;
    }
};

export default combineReducers({
    posts: postsReducer,
});
