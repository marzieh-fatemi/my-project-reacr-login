import {getPosts} from './../../adapters/jsonPlacehorderAdapter';

export const fetchPosts = () => {
    return async (dispatch, getState) => {
        try {
            const responseObj = await getPosts();
            dispatch({
                type: "posts/fetchPosts",
                payload: responseObj.data
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const searchPosts = (value) => {
    return {
        type: 'posts/searchPosts',
        payload: value
    };
    // return async (dispatch, getState) => {
    //     try {
    //         const responseObj = await getPosts();
    //         const filteredPosts = responseObj.data.filter(post => post.title.includes(value));
    //         dispatch({
    //             type: "posts/searchPosts",
    //             payload: filteredPosts
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
};
