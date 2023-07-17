import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Homepage';
import Bird from '../pages/Bird';
import Cat from '../pages/Cat';
import Dog from '../pages/Dog';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bird" element={<Bird />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
