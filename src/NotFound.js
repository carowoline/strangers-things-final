import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 Error</h1>
            <h3 className={styles.text}>Page Not Found</h3>
            <img
                className={styles.img}
                alt={"Pixel Rain"}
                src={"https://thumbs.gfycat.com/BackWellmadeGopher-max-1mb.gif"}
            />
        </div>
    )
}

export default NotFound;