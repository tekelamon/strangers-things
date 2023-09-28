/* eslint-disable react/prop-types */
import { makePost } from './utilities';

export const NewPost = ({ token }) => {
  const attemptMakePost = event => {
    event.preventDefault();

    const data = new FormData(event.target);

    const postData = {
      title: data.get('title'),
      description: data.get('description'),
      price: data.get('price'),
      location: data.get('location'),
      willDeliver: data.get('willDeliver'),
    };

    makePost( postData, token );
  };

  return <form onSubmit={attemptMakePost}>
    <h2>Make a new post</h2>
    <input type='text'
      name='title'
      placeholder='Title'
    />
    <input type='text'
      name='description'
      placeholder='Description'
    />
    <input type='text'
      name='price'
      placeholder='Price'
    />
    <input type='text'
      name='location'
      placeholder='Location'
    />
    <select name='willDeliver' >
      <option value={true}>Will Deliver</option>
      <option value={false}>Requires Pickup</option>
    </select>

    <input type='submit' value='Submit' />
  </form>;
};
