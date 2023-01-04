import { DateTime } from "luxon";
import { useHistory } from "react-router-dom";
import styles from "./Post.module.css";

const Post = ({ post }) => {
    const { createdAt, author: { username }, title, location, _id, price} = post;
    const history = useHistory();

    return (
        <div className={styles.container} >
            <img  className={styles.dog} src={"https://www.nicepng.com/png/full/145-1456503_corgi-corgi-pixel-art.png"}></img>
            <h1>{title}</h1>
            <span className={styles.price}>Price: {price}</span>
            <span className={styles.info} >Listed By: {username}</span>
            <span className={styles.info} >Posted On: {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_MED)}</span>
            <span className={styles.info} >Located At: {location}</span>
            <button
                className={styles.postButton}
                onClick={() =>
                    history.push(`/posts/${_id}`)}
            >
                View Listing
            </button>
        </div>
    );
};

export default Post;