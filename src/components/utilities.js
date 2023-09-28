// api calls done here to allow other functions to stay DRY and appear more readable
const COHORT = '2302-ACC-PT-WEB-PT-E';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;
const POSTS = `${BASE_URL}/posts`;

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${POSTS}`);
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
    console.log( username );
    console.log( password );
    console.log(result);
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
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
