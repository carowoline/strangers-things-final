import { useEffect } from "react";
import { getPosts } from "./requests";
import Post from "./Post";
import styles from "./PostList.module.css";

const PostList = ({ token, posts, setPosts }) => {
    useEffect(() => {
        getPosts()
            .then(setPosts)
            .catch((error) =>
                console.error(error)
            )
    }, [token, setPosts]);

    return (
        <div className={styles.container}>
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post} />
                ))
            }
        </div>
    );
};

export default PostList;