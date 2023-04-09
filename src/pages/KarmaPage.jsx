import { FireOutlined, StarOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Grid, Progress, Row, Segmented, Steps, Typography } from 'antd';
import { ReactComponent as Pogona } from '../../src/pogona.svg';
import { ReactComponent as Human } from '../../src/human.svg';
import { ReactComponent as Shkala } from '../../src/shkala.svg';
import AvatarImg from '../../src/newUser.png';
import Back from '../../src/backNew.png';
import { ReactComponent as Karma } from '../../src/karma.svg';
import { ReactComponent as Vector } from '../../src/Vector.svg';
import AchiveBadge from '../components/AchiveBadge';
import Actions from '../components/Actions';
import NewPost from '../components/NewPost';
import Post from '../components/Post';
import UserCardInfo from '../components/UserCardInfo';
const { useBreakpoint } = Grid;
const KarmaPage = () => {
  const screens = useBreakpoint();
  const data = [
    {
      title: 'Приближается срок заключения контракта',
      text: 'КУ ОО “Центр здравохранения',
    },
    {
      title: 'Поставка расходных материалов ',
      text: 'КУ ОО “Центр здравохранения',
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
                  karma, Эммануил Гедеонович
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
        <Col span={24}>
          <Card>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography.Text style={{ minWidth: 70 }}>Уровень</Typography.Text>
              <Button shape="circle"> 0</Button>
              <div style={{ minWidth: 120 }}>
                <Typography.Text> Карма </Typography.Text>
                <Karma />
                <Typography.Text>10</Typography.Text>
              </div>
              <Progress percent={20} />
              <Typography.Text style={{ color: 'grey' }}>Как повысить уровень?</Typography.Text>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Row>
              <Col span={12}>
                <Steps
                  style={{ margin: 50 }}
                  direction="vertical"
                  size="Large"
                  current={1}
                  items={[
                    {
                      title: '1 Уровень',
                      description: 'Доступны все публикации',
                    },
                    {
                      title: '2 Уровень',
                      description: 'Достижение "Хорошее начало"',
                    },
                    {
                      title: '3 Уровень',
                      description: 'Доступна сортировка публикаций ',
                    },
                    {
                      title: '4 Уровень',
                      description: 'Доступна подписка на авторов',
                    },
                    {
                      title: '5 Уровень',
                      description: 'Достижение "Так держать"  ',
                    },
                    {
                      title: '10 Уровень',
                      description: 'Оценка публикаций ',
                    },
                    {
                      title: '15 Уровень',
                      description: 'Дашборд активности',
                    },
                  ]}
                />
              </Col>

              <Col span={12}>
                <AchiveBadge
                  needHeader
                  Img={Human}
                  percent={'100'}
                  title="Турист"
                  descr="Пройдена регистрация"
                />
                <AchiveBadge
                  Img={Pogona}
                  percent={'5'}
                  title="Хорошее начало"
                  descr="Достигнете 2 Уровня"
                />
                <AchiveBadge
                  Img={Shkala}
                  percent={'3'}
                  title="Так держать"
                  descr="Достигнете 5 Уровня"
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default KarmaPage;
