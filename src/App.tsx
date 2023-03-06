import React from 'react';
import "./styles/main.scss"

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from 'react-router';
import RoutesList from './routes';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import CMSHistory from './pages/CMSHistory';
import Configuration from './pages/Configuration';
import Texts from './pages/Texts';
import AdminProfile from './pages/AdminProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.DEFAULT} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutesList.CMS_HISTORY} element={<CMSHistory />} />
          <Route path={RoutesList.CONFIGURATION} element={<Configuration />} />
          <Route path={RoutesList.TEXTS} element={<Texts />} />
          <Route path={RoutesList.ADMNISTRATOR_PROFILE} element={<AdminProfile />} />
        </Route>
        <Route path={RoutesList.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
