import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout';
import Homepage from '../pages/Homepage';
import Bird from '../pages/Bird';
import Cat from '../pages/Cat';
import Dog from '../pages/Dog';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Animal from '../pages/Animal';
import Image from '../pages/Image';
import ImageResult from '../pages/ImageResult';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/bird" element={<Bird />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/image-test" element={<Image />} />
          <Route path="/image-result" element={<ImageResult />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
