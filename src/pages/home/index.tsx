import { Button, Typography } from 'antd';
import { FC } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Typography.Title level={1}>Home Page</Typography.Title>
      <Button type="primary" size="large" onClick={() => navigate('/login')}>
        Login
      </Button>
    </div>
  );
};

export default Home;
