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
const ListOfPosts = () => {
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
        gutter={8}
        style={{
          width: 'inherit',
          marginRight: '20vw',
          marginLeft: '20vw',
          background: 'inherit',
        }}
        justify="center">
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
        <Col span={24}>
          <Post />
        </Col>
        <Col span={24}>
          <Post />
        </Col>
        <Col span={24}>
          <Post />
        </Col>
      </Row>
    </>
  );
};
export default ListOfPosts;
