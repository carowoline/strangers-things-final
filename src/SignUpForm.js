import { signup } from "./requests";
import styles from "./Login.module.css";

const SignUpForm = ({username, password, setUsername, setPassword, setToken}) => {
    return (
        <div className={styles.page}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <img className={styles.raccoon} src={"https://media0.giphy.com/media/zXLXNwBcGuZZ53ImfO/giphy.gif?cid=790b76110e050d0639768556a7c57deab63c1eb0e3c84d01&rid=giphy.gif&ct=s"} />
        <form className={styles.container}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            onSubmit={
                async (event) => {
                    event.preventDefault();
                    const responseToken = await signup(username, password);
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
            <label className={styles.password}>
                Password&nbsp;:&nbsp;
                <input
                    onChange={setPassword}
                    value={password}
                    type={"password"}
                />
            </label>
            <button className={styles.button} >Sign Up</button>
        </form>
        </div>
    );
};

export default SignUpForm;