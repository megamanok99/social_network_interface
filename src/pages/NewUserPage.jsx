import { FireOutlined, StarOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Grid, Row, Segmented, Typography } from 'antd';
import { ReactComponent as Icon2 } from '../../src/01.svg';
import { ReactComponent as Icon1 } from '../../src/02.svg';
import AvatarImg from '../../src/newUser.png';
import Back from '../../src/backNew.png';
import { ReactComponent as Cert } from '../../src/Cert.svg';
import { ReactComponent as Vector } from '../../src/Vector.svg';
import AchiveBadge from '../components/AchiveBadge';
import Actions from '../components/Actions';
import NewPost from '../components/NewPost';
import Post from '../components/Post';
import UserCardInfo from '../components/UserCardInfo';
const { useBreakpoint } = Grid;
const NewUserPage = () => {
  const screens = useBreakpoint();
  const data = [
    {
      title: 'Семинар с работой 44 и 223',
      text: 'Обучения системой',
    },
    {
      title: 'Семинар особенности корпроративных торгов',
      text: 'Обучения системой',
    },
  ];
  console.log(screens);
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
                  Приветствую, Эммануил Гедеонович
                </Typography.Title>
                <Typography.Text>0 подписчиков</Typography.Text>
              </div>
            </div>
            {/* <div
              style={{
                marginRight: '10vw',
              }}>
              <Icon1 style={{ marginRight: '10px' }} />
              <Icon2 />
            </div> */}
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
              <UserCardInfo carma="0" dateRegistr="01.04.2023" happy={0} />
            </Col>

            <Col span={24}>
              <Actions data={data} />
            </Col>

            <Col span={24}>
              <Card>
                <AchiveBadge
                  needHeader
                  Img={Vector}
                  percent={'0'}
                  title="Добросовестный поставщик"
                  descr="Последние 3 года исполнение без недостатков"
                />
                <AchiveBadge
                  Img={Cert}
                  title="Проверенный производитель"
                  descr="Пройдена сертификация продукции собственного производства"
                  percent={'0'}
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Row gutter={[16, 16]}>
            {/* <Col span={24}>
              <NewPost />
            </Col> */}

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
              <Post noLike />
            </Col>

            <Col span={24}>
              <Post noLike />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default NewUserPage;
