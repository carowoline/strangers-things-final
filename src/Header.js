import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ currentUser }) => {
    const buttons = [];

    if (!currentUser) {
        buttons.push(
            <div className={styles.link}>
                <Link className={styles.li} to={"/home"}>Home</Link>
                <Link className={styles.li} to={"/posts"}>Posts</Link>
                <Link className={styles.li} to={"/register"}>Register</Link>
                <Link className={styles.li} to={"/login"}>Log In</Link>
            </div>
        );
    } else {
        buttons.push(
            <div className={styles.link}>
                <Link className={styles.li} to={"/home"}>Home</Link>
                <Link className={styles.li} to={"/posts"}>Posts</Link>
                <Link className={styles.li} to={"/profile"}>Profile</Link>
                <Link className={styles.li} to={"/signout"}>Sign Out</Link>
            </div>
        );
    }

    return (
        <div>
            <header className={styles.container}>
                <img className={styles.logo} src={"https://i.pinimg.com/736x/f9/ad/50/f9ad502c027382857b0621d0659391cb.jpg"} />
                {currentUser && <div className={styles.name}>Welcome back, {currentUser.username}!</div>}
                {buttons}
            </header>
        </div>
    );
};

// -------------------------------------------------------------------------------
// Elliot's Example:

// const Header = ({ currentUser }) => {
//     return (
//         <header className={styles.container}>
//             {currentUser && <div>Welcome back, {currentUser.username}!</div>}
//             <Link to={"/home"}>Home</Link>
//             {
//                 !currentUser && <Link to={"/register"}>Register</Link>
//             }
//             {
//                 !currentUser && <Link to={"/login"}>Log In</Link>
//             }
//             {
//                 currentUser && <Link to={"/posts"}>Posts</Link>
//             }
//             {
//                 currentUser && <Link to={"/signout"}>Sign Out</Link>
//             }
//         </header>
//     );
// };

export default Header;
