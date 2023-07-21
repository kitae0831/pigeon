import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout';
import Homepage from '../pages/Homepage';

import Vacation from '../pages/Vacation';
import VacationResult from '../pages/VacationResult';

import Image from '../pages/Image';
import ImageResult from '../pages/ImageResult';

import WorkSurvive from '../pages/WorkSurvive';
import FreeBoard from '../pages/FreeBoard';

import Animal from '../pages/Animal';
import Search from '../pages/Search';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/image-test" element={<Image />} />
          <Route path="/image-result" element={<ImageResult />} />
          <Route path="/search/:id" element={<Search />} />
          <Route path="/work-survive" element={<WorkSurvive />} />
          <Route path="/free-board" element={<FreeBoard />} />
          <Route path="/vacation" element={<Vacation />} />
          <Route path="/vacation-result" element={<VacationResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
