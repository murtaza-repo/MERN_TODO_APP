import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIgmEYN9VoP7lF_kNUvYrx3_LDfogq5GQ",
  authDomain: "mern-todoapp1.firebaseapp.com",
  projectId: "mern-todoapp1",
  storageBucket: "mern-todoapp1.appspot.com",
  messagingSenderId: "1068584570146",
  appId: "1:1068584570146:web:3684826dd96bf5aab9697b"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
