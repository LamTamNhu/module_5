import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Error} from "./components/Error";
import {CreateServ} from "./components/CreateServ";
import {Navbar} from "./components/Navbar";
import {EditServ} from "./components/EditServ";
import {CustomerList} from "./components/CustomerList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/service/create" element={<CreateServ/>}/>
            <Route path="/service/edit/:id" element={<EditServ/>}/>
            <Route path="/customers" element={<CustomerList/>}/>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
