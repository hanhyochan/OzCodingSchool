import React from 'react';
import { Link, BrowserRouter, Routes, Route } from react-router-dom;
import test from '../page/test';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/test' element={<test />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;