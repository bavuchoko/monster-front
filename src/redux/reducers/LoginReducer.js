import axios from 'axios';
import { LOGIN_REQUEST } from "../type"
const initialState = {
    token: localStorage.getItem('token'),
};

export const loginRequest = (loginData) => {
    const response = axios.post("/api/login", loginData)
        .then((response) => {
            localStorage.setItem("token", response.headers.authorization);
            console.log(localStorage.getItem("token"));
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        });
    return { type: LOGIN_REQUEST, data: response };
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                token: localStorage.getItem('token'),
            };
        default:
            return state;
    }
}

export default LoginReducer;