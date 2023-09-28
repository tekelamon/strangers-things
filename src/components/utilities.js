// api calls done here to allow other functions to stay DRY and appear more readable
const COHORT = '2302-ACC-PT-WEB-PT-E';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const fetchWithToken = async ( token ) => {
  try {
    const headers = makeHeaders(token);
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: headers
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const deletePost = async ( post, token ) => {
  try {
    const headers = makeHeaders(token);
    const response = await fetch(`${BASE_URL}/posts/${post}`, {
      method: 'DELETE',
      headers: headers
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = async ( username, password ) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const login = async ( username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

const makeHeaders = token => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

export const makePost = async ( {title, description, price, location, willDeliver}, token ) => {
  // make headers
  const headers = makeHeaders(token);

  // make post object request
  const postData = {
    title,
    description,
    price,
    location,
    willDeliver
  };

  const postReq = {
    method:'POST',
    headers: headers,
    body: JSON.stringify( {post:postData} )
  };

  const response = await fetch(`${BASE_URL}/posts`, postReq);
  const result = await response.json();
  return result;
};

export const postMessage = async ( messageText, postId, token ) => {
  try {
    const headers = makeHeaders(token);
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        message: {
          content: messageText
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
