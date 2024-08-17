import { Button, Form, Input, Typography } from 'antd';
import { FC } from 'react';
import { LuArrowLeftToLine } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="back-arrow" onClick={() => navigate('/login')}>
        <LuArrowLeftToLine size={24} className="back-icon" />
        <span className="back-text">Quay lại</span>
      </div>

      <div className="login-wrapper">
        <div className="login-left">
          <div className="flex">
            <div className="login-form">
              <Typography.Title level={2} className="login-title">
                Quên mật khẩu
              </Typography.Title>
              <Form layout="vertical">
                <Form.Item label="Tên đăng nhập">
                  <Input
                    size="large"
                    placeholder="Vui lòng nhập Tên đăng nhập"
                  />
                </Form.Item>
                <Form.Item label="Email đăng ký">
                  <Input
                    size="large"
                    type="email"
                    placeholder="Vui lòng nhập Email đăng ký"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    block
                    type="primary"
                    size="large"
                    className="submit-btn"
                  >
                    Tiếp tục
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>

        <div className="login-right"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
