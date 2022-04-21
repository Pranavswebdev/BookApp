import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import CreatePage from '../Components/Pages/CreatePage';
import HomePage from '../Components/Pages/HomePage';
import EditPage from '../Components/Pages/EditPage';
import TextEditor from '../Components/TextEditor/TextEditor';

function PageRouters() {
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route exact path="/create" element={<CreatePage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/edit/:id" element={<EditPage />} />
          <Route exact path="/editor" element={<TextEditor />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default PageRouters;
