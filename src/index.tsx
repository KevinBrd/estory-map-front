import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/project.store";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvNThvGX_WfnfxeypPqvR8yjopOUhBWaw",
  authDomain: "estory-map.firebaseapp.com",
  projectId: "estory-map",
  storageBucket: "estory-map.appspot.com",
  messagingSenderId: "702087649667",
  appId: "1:702087649667:web:fe0c40f021a66dcc1a3eb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([{
    path: "/",
    element: (
        <App/>
    ),
}]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>,
    </React.StrictMode>
);

reportWebVitals();

export default auth;
