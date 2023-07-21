import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout';
import Homepage from '../pages/Homepage';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Animal from '../pages/Animal';
import Vacation from '../pages/Vacation';
import VacationResult from '../pages/VacationResult';
import Personality from '../pages/Personality';
import Image from '../pages/Image';
import ImageResult from '../pages/ImageResult';

import WorkSurvive from '../pages/WorkSurvive';
import FreeBoard from '../pages/FreeBoard';

import Bird from '../components/animalResult/Bird';
import Cat from '../components/animalResult/Cat';
import Dog from '../components/animalResult/Dog';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/image-test" element={<Image />} />
          <Route path="/image-result" element={<ImageResult />} />
          <Route path="/search" element={<Bird />} />
          <Route path="/search?type=cat" element={<Cat />} />
          <Route path="/search?type=dog" element={<Dog />} />
          <Route path="/workSurvive" element={<WorkSurvive />} />
          <Route path="/freeBoard" element={<FreeBoard />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/Vacation" element={<Vacation />} />
          <Route path="/VacationResult" element={<VacationResult />} />
          <Route path="/Personality" element={<Personality />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
