/* eslint-disable react/prop-types */
import { deletePost } from './utilities';

export const Post = ({ postData, token }) => {
  // destructure out postData
  const {
    location,
    _id,
    // willDeliver,
    // messages,
    // active,
    // author:{
    //     _id,
    //     username,
    // },
    title,
    description,
    price,
    isAuthor,
  } = postData;

  // map to card
  return <div>
    <h2>{title}</h2>
    <h3>{price}</h3>
    <p>{description}</p>
    <p>{location}</p>
    { isAuthor && <button type='button' onClick={()=>deletePost(_id, token)} >Delete Post</button>}
  </div>;
};
