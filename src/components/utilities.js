// api calls done here to allow other functions to stay DRY and appear more readable
const COHORT = `2302-ACC-PT-WEB-PT-E`;
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;
const POSTS = `${BASE_URL}/posts`;

export const fetchPosts = async () => {
    try {
        const response = await fetch(`${POSTS}`)
        const result = await response.json();
        return result
    } catch (err) {
        console.error(err);
    }
};
