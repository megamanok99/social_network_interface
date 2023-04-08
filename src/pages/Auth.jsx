import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd';
import Img from '../../src/ID.png';
import reg1 from '../../src/reg1.png';
import reg2 from '../../src/reg2.png';
import reg3 from '../../src/reg3.png';
import reg4 from '../../src/vk.png';
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Auth = ({ setAuth }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    setAuth(true);
  };
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Form
        name="rosAuth"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 0,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item name="remember" valuePropName="checked">
          <div
            style={{
              display: 'flex',

              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',

              flexDirection: 'column',
            }}>
            <img src={Img} alt="" />
            <Typography.Title level={3} style={{ marginBottom: 0 }}>
              Войдите с Росэлторг.ID
            </Typography.Title>
          </div>
        </Form.Item>
        <Form.Item
          label="Логин"
          name="username"
          rules={[
            {
              required: true,
              message: 'Введите логин!',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите пароль!',
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{}}>
          <Checkbox style={{ marginBottom: 5 }}>Запомнить</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{}}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Войти
          </Button>

          <div
            style={{
              display: 'flex',
              marginTop: 5,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',

              flexDirection: 'column',
            }}>
            <Typography.Text strong style={{ color: ' #7c7c7c' }}>
              Войти с помощью
            </Typography.Text>
            <Space>
              <Card hoverable>
                <img src={reg1} height={40} alt="" />
              </Card>
              <Card hoverable>
                <img src={reg2} height={40} alt="" />
              </Card>
              <Card hoverable>
                <img src={reg3} height={40} alt="" />
              </Card>
              <Card hoverable>
                <img src={reg4} height={40} alt="" />
              </Card>
            </Space>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 5,
              alignContent: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img src={Img} alt="" style={{ marginRight: 5 }} />{' '}
            <Typography.Text strong style={{ color: ' #0450f2' }}>
              Cоздать Росэоторг.ID
            </Typography.Text>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Auth;
