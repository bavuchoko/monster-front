import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import LoginReducer from './redux/reducers/LoginReducer'
import { createStore } from 'redux';
import {Provider} from "react-redux";
import store from './store.js'
// const root = ReactDOM.createRoot(document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
