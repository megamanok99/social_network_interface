import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  CalendarOutlined,
  PoweroffOutlined,
  MessageOutlined,
  SearchOutlined,
  TeamOutlined,
  ExceptionOutlined,
  UngroupOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Grid, Layout, Menu, Modal, Space, Tour, theme } from 'antd';
import React, { useRef, useState } from 'react';
import Img from './ID.png';
import { ReactComponent as YourSvg } from '../src/logo.svg';
import { Route, Routes } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import TaskCalendar from './components/taskCalendar';
import UserPage from './pages/userPage';
import BadgeBell from './components/BadgeBell';
import Auth from './pages/Auth';
import ViewUserPage from './pages/ViewUserPage';
import NewUserPage from './pages/NewUserPage';
import NewViewUserPage from './pages/NewViewUserPage';
import { ReactComponent as Karma } from './karma.svg';
import KarmaPage from './pages/KarmaPage';
import ListOfPosts from './pages/ListOfPosts';
import NewPost from './components/NewPost';
import NewMessage from './components/NewMessage';
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (bool) => {
    setIsModalOpen(bool);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      {auth ? (
        <Layout style={{}}>
          <Sider
            trigger={null}
            collapsible
            theme="light"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}>
            {collapsed && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                <img src={Img} alt="logo" width={'30px'} />
              </div>
            )}
            {!collapsed && (
              <div className="logo">
                <YourSvg
                  onClick={() => {
                    navigate('/');
                  }}
                />
              </div>
            )}

            <Menu
              // theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '2',
                  icon: <TeamOutlined />,
                  label: 'Сообщество',
                  onClick: () => {
                    navigate('/listOfPosts');
                    setCollapsed(false);
                  },
                },
                {
                  key: '3',
                  icon: (
                    <a
                      target="_blank"
                      href="https://www.roseltorg.ru/procedures/search"
                      rel="noreferrer">
                      <ExceptionOutlined />
                    </a>
                  ),
                  label: 'Торги',
                  onClick: () => {
                    setCollapsed(false);
                  },
                },
                {
                  key: '31',
                  icon: (
                    <a target="_blank" href="https://www.roseltorg.ru/speed" rel="noreferrer">
                      <UngroupOutlined />
                    </a>
                  ),
                  label: 'Сервисы',
                  onClick: () => {
                    setCollapsed(false);
                  },
                },
                {
                  key: '11',
                  icon: <CalendarOutlined />,
                  label: 'Календарь',
                  onClick: () => {
                    navigate('/calendar');
                    setCollapsed(false);
                  },
                },
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'Личный кабинет',
                  onClick: () => {
                    navigate('/user');
                    setCollapsed(false);
                  },
                },
                {
                  key: '1344',
                  icon: <UserOutlined />,
                  label: 'Просмотр профиля',

                  onClick: () => {
                    navigate('/ViewUserPage');
                    setCollapsed(false);
                  },
                },
                {
                  key: '13424',
                  icon: <UserOutlined />,
                  label: 'Личный кабинет new',
                  onClick: () => {
                    navigate('/NewUserPage');
                    setCollapsed(false);
                  },
                },
                {
                  key: '13444',
                  icon: <UserOutlined />,
                  label: 'Просмотр профиля new',
                  onClick: () => {
                    navigate('/NewViewUserPage');
                    setCollapsed(false);
                  },
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}>
              <Space style={{ float: 'right' }}>
                <Link to={'/karma'}>
                  <Button shape={'circle'} size="large" icon={<Karma />} />
                </Link>

                <Link to={'/portfolio'}>
                  <Button shape={'circle'} size="large" icon={<SearchOutlined />} />
                </Link>
                <Link to={'/portfolio'}>
                  <Button shape={'circle'} size="large" icon={<MessageOutlined />} />
                </Link>
                <BadgeBell />

                <Link to={'/user'}>
                  <Button shape={'circle'} size="large" icon={<UserOutlined />} />
                </Link>
                <Link to={'/auth'}>
                  <Button
                    shape={'circle'}
                    size="large"
                    icon={<PoweroffOutlined />}
                    onClick={() => {
                      setAuth(!auth);
                    }}></Button>
                </Link>
              </Space>
            </Header>
            <Content
              style={{
                // margin: '24px 16px',
                // padding: 24,
                minHeight: 280,
                background: '#F1F6FB',
              }}>
              <Routes>
                <Route path="*" element={<UserPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/table" element={<h1>Какая-то таблица</h1>} />
                <Route path="/calendar" element={<TaskCalendar />} />
                <Route path="/ViewUserPage" element={<ViewUserPage showModal={showModal} />} />
                <Route path="/NewUserPage" element={<NewUserPage />} />
                <Route
                  path="/NewViewUserPage"
                  element={<NewViewUserPage showModal={showModal} />}
                />
                <Route path="/karma" element={<KarmaPage />} />
                <Route path="/listOfPosts" element={<ListOfPosts />} />
              </Routes>
            </Content>
          </Layout>

          <Modal
            title="Написать сообщение"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <NewMessage />
          </Modal>
        </Layout>
      ) : (
        <Auth setAuth={setAuth} />
      )}
    </>
  );
};
export default App;
