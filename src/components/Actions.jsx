import { Avatar, Card, List, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
const Actions = ({ data }) => {
  return (
    <Card className="actions">
      {' '}
      <Typography.Title level={3}>Мероприятия</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            extra={
              <div>
                <CalendarOutlined /> 08.04.2023
              </div>
            }>
            <List.Item.Meta
              avatar={<Avatar />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.text}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
export default Actions;
