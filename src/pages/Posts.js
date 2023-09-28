import { useLoaderData } from 'react-router-dom';
import { Post } from '../components/Post';

export const Posts = () => {
    const {data} = useLoaderData();
    const posts = data.posts;   // array of posts from api

    return <div>
        {posts.map( (post, index) => <Post key={index} postData={post} /> )}
    </div>
};
