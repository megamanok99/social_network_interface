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
} from '@ant-design/icons';
import { Avatar, Button, Grid, Layout, Menu, Space, theme } from 'antd';
import React, { useState } from 'react';

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
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      {auth ? (
        <Layout
          style={{
            height: '100vh',
          }}>
          <Sider
            trigger={null}
            collapsible
            theme="light"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}>
            <div className="logo">
              <YourSvg
                onClick={() => {
                  navigate('/');
                }}
              />
            </div>
            <Menu
              // theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'Процедуры 44-ФЗ',
                  onClick: () => {
                    navigate('/table');
                  },
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'Реестр Запросов',
                  onClick: () => {
                    navigate('/table');
                  },
                },
                {
                  key: '31',
                  icon: <UploadOutlined />,
                  label: 'Контракты',
                  onClick: () => {
                    navigate('/table');
                  },
                },
                {
                  key: '11',
                  icon: <CalendarOutlined />,
                  label: 'Календарь',
                  onClick: () => {
                    navigate('/calendar');
                  },
                },
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'Личный кабинет',
                  onClick: () => {
                    navigate('/user');
                  },
                },
                {
                  key: '1344',
                  icon: <UserOutlined />,
                  label: 'Просмотр профиля',
                  onClick: () => {
                    navigate('/ViewUserPage');
                  },
                },
                {
                  key: '13424',
                  icon: <UserOutlined />,
                  label: 'Личный кабинет new',
                  onClick: () => {
                    navigate('/NewUserPage');
                  },
                },
                {
                  key: '13444',
                  icon: <UserOutlined />,
                  label: 'Просмотр профиля new',
                  onClick: () => {
                    navigate('/NewViewUserPage');
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
                <Route path="/ViewUserPage" element={<ViewUserPage />} />
                <Route path="/NewUserPage" element={<NewUserPage />} />
                <Route path="/NewViewUserPage" element={<NewViewUserPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Auth setAuth={setAuth} />
      )}
    </>
  );
};
export default App;
