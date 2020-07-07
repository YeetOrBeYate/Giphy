import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux packages

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

//reducers

import {GifReducer} from "./Reducers/Gifs"

//we only have one reducer at the momemnt but that can change so lets just use the combiner middleware

const rootReducer = combineReducers({
  Gifs:GifReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
