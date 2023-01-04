import { login } from "./requests";
import styles from "./Login.module.css";

const Login = ({
    username,
    password,
    setUsername,
    setPassword,
    setToken
}) => {
    return (
        <div className={styles.page}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img className={styles.raccoon} src={"https://media3.giphy.com/media/X43oNe2Iyr9neByApZ/giphy.gif"} />
            <form
                className={styles.container}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                onSubmit={
                    async (event) => {
                        event.preventDefault();
                        const responseToken = await login(username, password);
                        setToken(responseToken);
                    }
                }
            >
                <label className={styles.username}>
                    Username&nbsp;:&nbsp;
                    <input
                        onChange={setUsername}
                        value={username}
                    />
                </label>
                <label className={styles.password}>Password&nbsp;:&nbsp;
                    <input
                        onChange={setPassword}
                        value={password}
                        type={"password"}
                    />
                </label>
                <button className={styles.button} >Log In</button>
            </form>
        </div>
    );
};

export default Login;