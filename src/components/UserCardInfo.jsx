import { ReactComponent as Karma } from '../../src/karma.svg';
import { ReactComponent as Calendar } from '../../src/calender.svg';
import { ReactComponent as ArrowUp } from '../../src/arrow-up.svg';
import { ReactComponent as Test } from '../../src/arrowup.svg';
import { ReactComponent as Info } from '../../src/infocon.svg';
import { Card, Col, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
const UserCardInfo = ({ carma, dateRegistr, happy, fail = 0 }) => {
  return (
    <Card>
      <Row>
        <Col span={8}>
          <div>
            <Typography.Text strong className="star-burst">
              Карма
            </Typography.Text>
            <Link to={'/karma'}>
              <Info />
            </Link>
          </div>

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
        <Col span={8}>
          <Typography.Text strong>Провалов</Typography.Text>
          <br></br>
          <Space>
            <Test style={{ display: 'flex' }} />
            <Typography.Text strong>{fail}</Typography.Text>
          </Space>
        </Col>
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
