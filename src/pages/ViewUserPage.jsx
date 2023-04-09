import { FireOutlined, StarOutlined, ThunderboltOutlined, CheckOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Segmented, Space, Typography, message } from 'antd';
import { ReactComponent as Icon2 } from '../../src/01.svg';
import { ReactComponent as Icon1 } from '../../src/02.svg';
import AvatarImg from '../../src/avatar.png';
import Back from '../../src/back.png';

import { ReactComponent as Cert } from '../../src/Cert.svg';
import { ReactComponent as Cert2 } from '../../src/Cert2.svg';
import AchiveBadge from '../components/AchiveBadge';
import Actions from '../components/Actions';
import NewPost from '../components/NewPost';
import Post from '../components/Post';
import UserCardInfo from '../components/UserCardInfo';
import StatisticTrap from '../components/StatisticTrap';
import { useState } from 'react';

const ViewUserPage = ({ showModal }) => {
  const [subscribe, setSubscribe] = useState(false);
  const [karma, setKarma] = useState(6334);

  const data = [
    {
      title: 'Приближается срок заключения контракта',
      text: 'КУ ОО “Центр здравохранения',
    },
    {
      title: 'Поставка расходных материалов ',
      text: 'КУ ОО “Центр здравохранения',
    },
    {
      title: 'Поставка расходных материалов ',
      text: 'КУ ОО “Центр здравохранения',
    },
    {
      title: 'Поставка расходных материалов ',
      text: 'КУ ОО “Центр здравохранения',
    },
  ];
  return (
    <>
      <Row
        style={{
          marginBottom: '10px',
        }}>
        <Col
          span={24}
          style={{
            backgroundImage: `url(${Back})`,
            backgroundSize: 'cover',
            height: 120,
          }}></Col>
        <Col span={24}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',

              alignItems: 'center',
            }}>
            <div style={{ display: 'flex' }}>
              <Avatar
                size={105}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  left: '10vw',
                  backgroundImage: `url(${AvatarImg})`,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  marginLeft: '18vw',
                }}>
                <Typography.Title level={3} style={{ fontSize: '18px', marginBottom: 0 }}>
                  Шарпей Виссарионович
                </Typography.Title>
                <div>
                  <Typography.Text style={{ marginRight: 10 }}>1,342 подписчиков</Typography.Text>
                  <Typography.Text>ИНН 8457948573956</Typography.Text>
                </div>
              </div>
            </div>

            <div
              style={{
                marginRight: '10vw',
              }}>
              <Space>
                <Button
                  type="primary"
                  onClick={() => {
                    showModal(true);
                  }}>
                  Написать
                </Button>

                {!subscribe ? (
                  <Button
                    type="primary"
                    onClick={() => {
                      setSubscribe(true);
                      message.success('Карма выросла на 5!');
                      setKarma(karma + 1);
                    }}>
                    Подписаться
                  </Button>
                ) : (
                  <>
                    <Button
                      type="default"
                      onClick={() => {
                        setSubscribe(false);
                      }}>
                      Отписаться
                    </Button>
                    <CheckOutlined style={{ color: 'green' }} />
                  </>
                )}
              </Space>
            </div>
          </div>
        </Col>
      </Row>
      <Row
        gutter={8}
        style={{
          width: 'inherit',
          marginRight: '10vw',
          marginLeft: '10vw',
          background: 'inherit',
        }}
        justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <UserCardInfo carma={karma} dateRegistr="02.05.2015" happy={45} />
            </Col>
            {/* 
            <Col span={24}>
              <Actions data={data} />
            </Col> */}

            <Col span={24}>
              <Card>
                <AchiveBadge
                  needHeader
                  Img={Cert2}
                  title="Аккредитация на площадке"
                  descr="Зарегестрирован с 2015 года"
                />
                <AchiveBadge
                  Img={Cert}
                  title="Проверенный производитель"
                  descr="Пройдена сертификация продукции собственного производства"
                />
                <StatisticTrap />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card>
                <Segmented
                  style={{
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}
                  className="segment"
                  size="large"
                  options={[
                    {
                      label: 'Новое',
                      value: 'List',
                      icon: <ThunderboltOutlined className="iconCat" />,
                    },
                    {
                      label: 'Горячее',
                      value: 'Kanban',
                      icon: <FireOutlined className="iconCat" />,
                    },
                    {
                      label: 'Топ',
                      value: 'top',
                      icon: <StarOutlined className="iconCat" />,
                    },
                  ]}
                />
              </Card>
            </Col>

            <Col span={24}>
              <Post />
            </Col>

            <Col span={24}>
              <Post />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default ViewUserPage;
