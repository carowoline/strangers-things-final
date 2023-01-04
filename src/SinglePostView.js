import styles from "./SinglePostView.module.css";

const SinglePostView = ({ postId }) => {

    return (
        <div className={styles.container}>
            <h1>{postId}</h1>
        </div>
    );
};

export default SinglePostView;