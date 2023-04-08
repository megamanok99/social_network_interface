import { BellOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, List, Popover, Tabs } from 'antd';
import moment from 'moment';
import React from 'react';

const { TabPane } = Tabs;

class BadgeBell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countNitification: '',
      newNotification: [],
      listLoadingStatus: false,
    };
  }

  componentDidMount = () => {};
  getNotification = () => {};

  readMessage = () => {};

  getNumNewNotification = () => {};

  getNewNotification = () => {};

  render() {
    const menu = (
      <div className="alertMess">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Новые сообщения" key="1">
            <List
              loading={this.state.listLoadingStatus}
              itemLayout="horizontal"
              dataSource={this.state.newNotification}
              pagination={this.state.newNotification.length > 9}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    className={'alert-item'}
                    title={`Новое сообщение`}
                    description={item.txt}
                  />
                  <div className={'alert-item-time'}>{moment(item.registered).format('LLL')}</div>
                </List.Item>
              )}
            />
            <Button
              style={{ float: 'right' }}
              type="primary"
              size="small"
              ghost
              onClick={this.readMessage}>
              Прочитано
            </Button>
          </TabPane>
          <TabPane tab="Все сообщения" key="2">
            <List
              loading={this.state.listLoadingStatus}
              itemLayout="horizontal"
              dataSource={this.state.notification}
              pagination={{
                defaultPageSize: 5,
                pageSizeOptions: [5, 10, 20, 50],
              }}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    className={'alert-item'}
                    title={`Сообщение`}
                    description={item.txt}
                  />
                  <div className={'alert-item-time'}>{moment(item.registered).format('LLL')}</div>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    );

    return (
      <Popover
        content={menu}
        trigger="click"
        onClick={async () => {
          this.setState({ listLoadingStatus: true });
          Promise.all([
            this.getNumNewNotification(),
            this.getNewNotification(),
            this.getNotification(),
          ]).then(() => this.setState({ listLoadingStatus: false }));
        }}>
        <Badge count={1} color="red">
          <Button shape={'circle'} size="large" icon={<BellOutlined />}></Button>
        </Badge>
      </Popover>
    );
  }
}

export default BadgeBell;
