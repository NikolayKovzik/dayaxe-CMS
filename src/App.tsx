import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Daycation from './pages/Daycation';
import Moments from './pages/Moments';
import HotelPasses from './pages/HotelPasses';
import Promotions from './pages/Promotions';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import './styles/main.scss';
import RoutesList from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path={RoutesList.DEFAULT} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={RoutesList.USERS} element={<Users />} />
            <Route path={RoutesList.DAYCATION} element={<Daycation />} />
            <Route path={RoutesList.HOTEL_PASSES} element={<HotelPasses />} />
            <Route path={RoutesList.PROMOTIONS} element={<Promotions />} />
            <Route path={RoutesList.MOMENTS} element={<Moments />} />
          </Route>
          <Route path={RoutesList.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
