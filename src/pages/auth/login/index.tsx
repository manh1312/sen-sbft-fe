import {
  Button,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Typography,
} from 'antd';
import { FC } from 'react';
import { LuArrowLeftToLine } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const Login: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="back-arrow" onClick={() => navigate('/')}>
        <LuArrowLeftToLine size={24} className="back-icon" />
        <span className="back-text">Quay lại</span>
      </div>

      <Row>
        <Col xs={12}>
          <div className="login-left">
            <div className="flex">
              <Typography.Title level={3} className="welcome-text">
                Chào mừng bạn đến với SenSBFT!
              </Typography.Title>

              <div className="login-form">
                <Typography.Title level={2} className="login-title">
                  Đăng nhập
                </Typography.Title>
                <Form layout="vertical">
                  <Form.Item label="Tên đăng nhập">
                    <Input
                      size="large"
                      placeholder="Vui lòng nhập Tên đăng nhập"
                    />
                  </Form.Item>
                  <Form.Item label="Mật khẩu">
                    <Input.Password
                      size="large"
                      placeholder="Vui lòng nhập mật khẩu"
                    />
                  </Form.Item>

                  <Flex
                    align="center"
                    justify="space-between"
                    className="form-footer-wrapper"
                  >
                    <Checkbox className="remember-me">
                      Ghi nhớ đăng nhập
                    </Checkbox>

                    <Button
                      type="link"
                      onClick={() => navigate('/forgot-password')}
                    >
                      Quên mật khẩu?
                    </Button>
                  </Flex>

                  <Form.Item>
                    <Button
                      block
                      type="primary"
                      size="large"
                      className="submit-btn"
                    >
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="login-right"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
