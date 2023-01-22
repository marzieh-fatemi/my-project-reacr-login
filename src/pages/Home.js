import React, {useState, useEffect} from 'react';
import AppBar from './../elements/AppBar';
import PostsList from './../components/PostsList';
import { getPosts } from '../adapters/jsonPlacehorderAdapter';

export default function HomePage({name}) {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function () {
            try {
                const responseObj = await getPosts();
                setPosts(responseObj.data);
                setIsLoading(false);
                setError(null);
            } catch (error) {
                setPosts(null);
                setIsLoading(false);
                setError(error);
            }
        })();
    }, []);

    console.log(posts);
    console.log(error);

    return (
        <>
            <AppBar name={name}/>
            <PostsList posts={posts}/>
        </>
    );
};
