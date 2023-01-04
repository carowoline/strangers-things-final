import axios from "axios";
import { BASE_URL, COHORT_NAME } from "./const";

export const getMyUser = async (token) => {
    try {
        const response = await axios.get(
            `${BASE_URL}${COHORT_NAME}/users/me`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            },
        );
        const me = response.data.data;

        return me;
    }
    catch (error) {
        console.log("Issue with getMyUser in requests")
        console.error(error)

        throw error;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(
            `${BASE_URL}${COHORT_NAME}/users/login`,
            {
                user: {
                    username,
                    password
                }
            },
        );
        const responseToken = response.data.data.token;

        return responseToken;
    }
    catch (error) {
        console.log('Issue with Login in Requests')
        console.error(error);

        throw error;
    }
}

export const signup = async (username, password) => {
    try {
        const response = await axios.post(
            `${BASE_URL}${COHORT_NAME}/users/register`,
            {
                user: {
                    username,
                    password
                }
            },
        );
        const responseToken = response.data.data.token;

        return responseToken;
    }
    catch (error) {
        console.log('Issue with Signup in Requests')
        console.error(error);
    }
}

export const getPosts = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}${COHORT_NAME}/posts`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        const posts = response.data.data.posts;

        return posts;
    }
    catch (error) {
        console.log("Error with getPosts in requests")
        console.error(error);

        throw error;
    }
}