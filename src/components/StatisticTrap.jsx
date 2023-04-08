import { Button, Col, Row, Statistic } from 'antd';

const StatisticTrap = () => {
  return (
    <Row gutter={8}>
      <Col span={8}>
        <Statistic title="Участий" value={5243} />
      </Col>
      <Col span={8}>
        <Statistic title="Допусков" value={'97%'} />
      </Col>
      <Col span={8}>
        <Statistic
          title="Контракт 
на сумму N млн"
          value={342}
        />
      </Col>
      <Col span={8}>
        <Statistic title="  Контракт  без снижения цены" value={13} />
      </Col>
      <Col span={8}>
        <Statistic title="Участий" value={5243} />
      </Col>
      <Col span={8}>
        <Statistic title="Допусков" value={'97%'} />
      </Col>
    </Row>
  );
};
export default StatisticTrap;
