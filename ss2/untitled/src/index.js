import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ItemList} from "./components/ItemList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {EditItem} from "./components/EditItem";
import {Header} from "./components/Header";
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Routes>
                <Route path="/" element={<ItemList/>}/>
                <Route path="/service/edit/:id" element={<EditItem/>}/>
            </Routes>
            <ToastContainer />
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
