import { ReactComponent as Karma } from '../../src/karma.svg';
import { ReactComponent as Calendar } from '../../src/calender.svg';
import { ReactComponent as ArrowUp } from '../../src/arrow-up.svg';
import { Card, Col, Row, Space, Typography } from 'antd';
const UserCardInfo = ({ carma, dateRegistr, happy }) => {
  return (
    <Card>
      <Row>
        <Col span={8}>
          <Typography.Text strong>Карма</Typography.Text>
          <br></br>
          <Space>
            <Karma style={{ display: 'flex' }} />
            <Typography.Text strong>{carma}</Typography.Text>
          </Space>
        </Col>
        <Col span={16}>
          <Typography.Text strong>Дата регистрации</Typography.Text>
          <br></br>
          <Space>
            <Calendar style={{ display: 'flex' }} />
            <Typography.Text strong>{dateRegistr}</Typography.Text>
          </Space>
        </Col>
        <Col span={8}></Col>
        <Col span={16}>
          <Typography.Text strong>Успешных сделок</Typography.Text>
          <br></br>
          <Space>
            <ArrowUp style={{ display: 'flex' }} />
            <Typography.Text strong>{happy}</Typography.Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
export default UserCardInfo;
