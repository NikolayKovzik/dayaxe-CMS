import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import { Routes, useNavigate } from 'react-router';
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
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { selectAuth } from './redux/store/selectors';
import Loader from './UI/Loader';
import { checkAuth } from './redux/asyncActions/auth';

const App = () => {
  const { isAuth, loading, error, success } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate(RoutesList.DEFAULT);
    } else {
      navigate(RoutesList.SIGN_IN);
    }
  }, [isAuth]);

  useEffect(() => {
    if (success) {
      toast.success('Success', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [error]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        {isAuth ? (
          <Route path={RoutesList.DEFAULT} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={RoutesList.USERS} element={<Users />} />
            <Route path={RoutesList.DAYCATION} element={<Daycation />} />
            <Route path={RoutesList.HOTEL_PASSES} element={<HotelPasses />} />
            <Route path={RoutesList.PROMOTIONS} element={<Promotions />} />
            <Route path={RoutesList.MOMENTS} element={<Moments />} />
            <Route path={RoutesList.NOT_FOUND} element={<NotFound />} />
          </Route>
        ) : (
          <>
            <Route path={RoutesList.SIGN_IN} element={<SignIn />} />
            <Route path={RoutesList.SIGN_UP} element={<SignUp />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
