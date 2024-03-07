import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAVLEuspxnBpXh71hX8JshyXyUr3S2BYPM",
  authDomain: "reactcoder-23de3.firebaseapp.com",
  projectId: "reactcoder-23de3",
  storageBucket: "reactcoder-23de3.appspot.com",
  messagingSenderId: "24098703999",
  appId: "1:24098703999:web:2c2dcca7a4469bd9c84d4a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
