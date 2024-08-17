import ForgotPassword from '@pages/auth/forgot-password';
import Login from '@pages/auth/login';
import Home from '@pages/home';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
