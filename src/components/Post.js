export const Post = ({ postData }) => {
    // destructure out postData
    const {
        location,
        willDeliver,
        messages,
        active,
        author:{
            _id,
            username,
        },
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
    </div>;
};
