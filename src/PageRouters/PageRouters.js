import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import CreatePage from '../Components/Pages/CreatePage';
import HomePage from '../Components/Pages/HomePage';

function PageRouters() {
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route exact path="/edit" element={<CreatePage />} />
          <Route exact path="/Home" element={<HomePage />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default PageRouters;
