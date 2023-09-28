/* eslint-disable react/prop-types */
import { useLoaderData } from 'react-router-dom';
import { NewPost } from '../components/NewPost';
import { Post } from '../components/Post';

export const Posts = ({ token }) => {
  const {data} = useLoaderData();
  const posts = data.posts;   // array of posts from api

  return <div>
    { token && <NewPost token={token} />}
    {posts.map( (post, index) => <Post key={index} postData={post} token={token} /> )}
  </div>;
};
