import theme from '@lib/antd/theme';
import Home from '@pages/home';
import Login from '@pages/login';
import { ConfigProvider } from 'antd';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
