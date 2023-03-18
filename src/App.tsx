import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import ProtectedLayout from './Layouts/ProtectedLayout';
import HomePage from './pages/HomePage';
import HotelPasses from './pages/HotelPasses';
import Users from './pages/Users';
import './styles/main.scss';
import RoutesList from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { selectAuth } from './redux/store/selectors';
import Loader from './UI/Loader';
import { checkAuth } from './redux/asyncActions/auth';
import { authActions } from './redux/slices/auth';
import Hotels from './pages/Hotels';
import NotFound from './pages/NotFound';
import AuthLayout from './Layouts/AuthLayout';

const App = () => {
  const { loading, error, success } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  useEffect(() => {
    if (success) {
      toast.success('Success', {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(authActions.resetSuccess());
        },
      });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        onOpen: () => {
          dispatch(authActions.resetError());
        },
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
        <Route path={RoutesList.DEFAULT} element={<AuthLayout />}>
          <Route path={RoutesList.SIGN_IN} element={<SignIn />} />
          <Route path={RoutesList.SIGN_UP} element={<SignUp />} />
        </Route>
        <Route path={RoutesList.DEFAULT} element={<ProtectedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutesList.USERS} element={<Users />} />
          <Route path={RoutesList.HOTELS} element={<Hotels />} />
          <Route path={RoutesList.HOTEL_PASSES} element={<HotelPasses />} />
        </Route>
        <Route path={RoutesList.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
