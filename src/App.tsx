import React from 'react';

import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import NotFound from "./components/notFound/NotFound";
import {Header} from './components/header/Header';

import './scss/app.scss';


export const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/ReactPizzaTS" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;
