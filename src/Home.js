import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <div style={{
                display: "flex",
                alignItems: "flex-end"
            }}>
                <img className={styles.tail}
                    src={"https://media4.giphy.com/media/IyrUCiltwPWgKsbFZm/giphy.gif"}
                />
                <h1 className={styles.homeTitle}>&nbsp;Stranger s Things&nbsp;</h1>
            </div>
        </div>
    )
}


export default Home;