import { FireOutlined, StarOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Row, Segmented, Tooltip, Typography } from 'antd';
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
import Post2 from '../../src/post2.png';
const UserPage = () => {
  const data = [
    {
      title: 'До завершения подачи ценового предложения закупки 323000000000 осталось 3 часа',
      // text: 'КУ ОО “Центр здравохранения',
    },
    {
      title: 'Срок действия вашей ЭЦП истекает через 37 дней...',
      text: 'Удостоверяющий центр',
    },
    {
      title: 'Приближается срок заключения контракта',
      text: 'КУ ОО “Центр здравохранения',
    },
    {
      title: 'Назначено время начала торгов по процедуре 32300000',
      // text: 'КУ ОО “Центр здравохранения',
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
              <Tooltip title="Проверенный производитель" placement="bottomRight" color={'blue'}>
                {' '}
                <Icon1 style={{ marginRight: '10px' }} />
              </Tooltip>

              <Tooltip title="Аккредитация на площадке" placement="bottomRight" color={'blue'}>
                {' '}
                <Icon2 />{' '}
              </Tooltip>
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
                <div>
                  <Typography.Title level={3}>Публикации</Typography.Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography.Text>Мои подписки</Typography.Text>
                    <Typography.Text>156</Typography.Text>
                  </div>
                  <Divider />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography.Text>Мои публикации</Typography.Text>
                    <Typography.Text>234</Typography.Text>
                  </div>
                  <Divider />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography.Text>Мои комментарии</Typography.Text>
                    <Typography.Text>1297</Typography.Text>
                  </div>
                  <Divider />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography.Text>Сохраненное</Typography.Text>
                    <Typography.Text>54</Typography.Text>
                  </div>
                  <Divider />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography.Text>Одобрено</Typography.Text>
                    <Typography.Text>1234</Typography.Text>
                  </div>
                  <Divider />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography.Text>Не одобрено</Typography.Text>
                    <Typography.Text>47</Typography.Text>
                  </div>
                  <Divider />
                </div>
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
              <Post Img={Post2} title="Таблица размеров штрафов по 223-ФЗ" auth="Гольцова Полина" />
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
