import theme from '@lib/antd/theme';
import AppRouter from '@router';
import { ConfigProvider } from 'antd';
import { FC } from 'react';

const App: FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <AppRouter />
    </ConfigProvider>
  );
};

export default App;
