import { FireOutlined, StarOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Segmented, Typography } from 'antd';
import { ReactComponent as Icon2 } from '../../src/01.svg';
import { ReactComponent as Icon1 } from '../../src/02.svg';
import AvatarImg from '../../src/avatar.png';
import Back from '../../src/back.png';

import { ReactComponent as Vector } from '../../src/Vector.svg';
import AchiveBadge from '../components/AchiveBadge';
import Actions from '../components/Actions';
import NewPost from '../components/NewPost';
import Post from '../components/Post';
import UserCardInfo from '../components/UserCardInfo';

const UserPage = () => {
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

              alignItems: 'flex-start',
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
                  Приветствую, Шарпей Виссарионович
                </Typography.Title>
                <Typography.Text>1,342 подписчиков</Typography.Text>
              </div>
            </div>
            <div
              style={{
                marginRight: '10vw',
              }}>
              <Icon1 style={{ marginRight: '10px' }} />
              <Icon2 />
            </div>
          </div>
        </Col>
      </Row>
      <Row
        gutter={8}
        style={{
          width: 'inherit',
          paddingRight: '10vw',
          paddingLeft: '10vw',
          background: 'inherit',
        }}
        justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <UserCardInfo carma="6334" dateRegistr="02.05.2015" happy={45} />
            </Col>

            <Col span={24}>
              <Actions data={data} />
            </Col>

            <Col span={24}>
              <Card>
                <AchiveBadge
                  needHeader
                  Img={Vector}
                  percent={50}
                  title="Добросовестный поставщик"
                  descr="Последние 3 года исполнение без недостатков"
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <NewPost />
            </Col>

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
export default UserPage;
