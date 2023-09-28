/* eslint-disable react/prop-types */
import { deletePost, postMessage } from './utilities';
import { useState } from 'react';
import ReactModal from 'react-modal';

export const Post = ({ postData, token }) => {
  const [sendMessage, setSendMessage] = useState(false);
  const [message, setMessage] = useState('');

  // destructure out postData
  const {
    location,
    _id,
    // willDeliver,
    // messages,
    // active,
    author:{
      username
    },
    title,
    description,
    price,
    isAuthor,
  } = postData;

  // map to card
  return <div>
    {/* info for product */}
    <h2>{title}</h2>
    <h3>{price}</h3>
    <p>{description}</p>
    <p>{location}</p>

    {/* only allow author to delete post */}
    { isAuthor && <button type='button' onClick={()=>deletePost(_id, token)} >Delete Post</button>}

    {/* button to send a message to author */}
    {/* only available to logged in users, that are NOT the author of this post */}
    { (token && !isAuthor) && <button type='button' onClick={()=>setSendMessage(true)} >Send message to author</button> }

    {/* message output box */}
    <ReactModal isOpen={sendMessage} ariaHideApp={false} >
      <p>Posted by {username}</p>
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <input type='text'
        placeholder='What do you want to say?'
        name='messageText'
        required
        onChange={e=>setMessage(e.target.value)}
      />
      <button type='button' onClick={()=>setSendMessage(false)} >Close</button>
      <button type='button' onClick={()=>postMessage(message, _id, token)} >Send Message</button>
    </ReactModal>
  </div>;
};
