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
import { Avatar, Button, Grid, Layout, Menu, Modal, Space, Tour, Typography, theme } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
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
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (bool) => {
    setIsModalOpen(bool);
  };

  useEffect(() => {
    if (localStorage.getItem('firstAuth')) {
      setState({ run: false });
    }
  }, []);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <Typography.Title level={4}>Знакомство с системой</Typography.Title>,
        locale: { skip: <strong aria-label="skip">Пропустить</strong> },
        placement: 'center',
        target: '.star-burst',
      },
      {
        content: (
          <Typography.Title level={4}>
            Твоя активность в сообществе. Повышай уровень, который открывает новый функционал
            сообщества
          </Typography.Title>
        ),
        floaterProps: {
          disableAnimation: true,
        },
        spotlightPadding: 20,
        target: '.star-burst',
      },
      {
        content: (
          <>
            <Typography.Title level={4}>
              Проходи профильные активности, выше уровень - больше функционала
            </Typography.Title>

            <Typography.Title level={5}>
              Например: "Мини-курс по терминам в торгах" +100500 кармы - рост до 3 уровня. "Тест по
              терминам в торгах" +100500 кармы - рост до 5 уровня.
            </Typography.Title>
          </>
        ),
        floaterProps: {
          disableAnimation: true,
        },
        spotlightPadding: 20,
        target: '.actions',
      },
      {
        content: (
          <Typography.Title level={4}>
            Оценка публикации также повышает твою карму, открывается с 5-ого уровня
          </Typography.Title>
        ),
        floaterProps: {
          disableAnimation: true,
        },
        spotlightPadding: 20,
        target: '.raining',
      },
    ],
  });
  const handleJoyrideCallback = (data) => {
    const { status, type } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setState({ run: false });
      localStorage.setItem('firstAuth', true);
    }
  };
  return (
    <>
      {auth ? (
        <>
          <Joyride
            locale={{
              back: 'Назад',
              close: 'Закрыть',
              last: 'Последний',
              next: 'Следующий',
              open: 'Открыть окно',
              skip: 'Пропустить',
            }}
            callback={handleJoyrideCallback}
            continuous
            hideCloseButton
            run={run}
            scrollToFirstStep
            showProgress
            showSkipButton
            steps={steps}
            styles={{
              options: {
                zIndex: 10000,
                primaryColor: '#0450F2',
              },
            }}
          />
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
                  <Route path="*" element={<NewUserPage />} />
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
        </>
      ) : (
        <Auth setAuth={setAuth} />
      )}
    </>
  );
};
export default App;
