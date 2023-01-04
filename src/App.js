import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import Login from "./Login";
import Signout from "./Signout";
import PostList from "./PostList";
import Profile from "./Profile";
import NotFound from "./NotFound";
import SinglePostView from "./SinglePostView";
import { TOKEN_STORAGE_KEY } from "./const";
import { getMyUser } from "./requests";
import styles from "./App.module.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const [me, setMe] = useState(null);

  const setAndStoreToken = (responseToken) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, responseToken);
    setToken(responseToken);
  }

  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);

    setToken(storageToken);
  }, []);

  useEffect(() => {
    if (token) {
      getMyUser(token)
        .then((me) => {
          setMe(me);
        });
    }
  }, [token]);

  const setTargetValue = (callback) => {
    return (event) => {
      callback(event.target.value);
    };
  };

  return (
    <div>
      <Header
        currentUser={me}
      />
        <main className={styles.main}>
          <Switch>
            <Route exact path={"/home"}>
              <Home />
            </Route>
            <Route exact path={"/register"}>
              <SignUpForm
                username={username}
                password={password}
                setUsername={setTargetValue(setUsername)}
                setPassword={setTargetValue(setPassword)}
                setToken={setAndStoreToken}
              />
            </Route>
            <Route exact path={"/login"}>
              <Login
                username={username}
                password={password}
                setUsername={setTargetValue(setUsername)}
                setPassword={setTargetValue(setPassword)}
                setToken={setAndStoreToken}
              />
            </Route>
            <Route exact path={"/signout"}>
              <Signout
                username={username}
                password={password}
                setUsername={setTargetValue(setUsername)}
                setPassword={setTargetValue(setPassword)}
                setToken={setAndStoreToken}
              />
            </Route>
            <Route exact path={"/posts"}>
              <PostList
                token={token}
                posts={posts}
                setPosts={setPosts}
              />
            </Route>
            <Route
              exact path={"/posts/:postId"}
              render={
                (routeProps) => {
                  const {
                    match: {
                      params: {
                        postId
                      },
                    },
                  } = routeProps;

                  return (
                    <SinglePostView
                      postId={postId}
                    />
                  );
                }
              }
            />
            <Route exact path={"/profile"}>
              <Profile
                username={username}
                password={password}
                setUsername={setTargetValue(setUsername)}
                setPassword={setTargetValue(setPassword)}
                setToken={setAndStoreToken}
              />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
    </div>
  )
};

export default App;
