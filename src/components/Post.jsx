import { DownCircleOutlined, MessageOutlined, UpCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Tag, Typography } from 'antd';
import PostImg from '../../src/post.png';
const Post = () => {
  return (
    <Card>
      <Row>
        <Col span={24}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignitems: 'center',
              flexWrap: 'wrap',
            }}>
            <div
              style={{
                display: 'flex',

                alignContent: 'center',
                alignItems: 'center',
              }}>
              <Avatar size={13} />
              <Typography.Text strong style={{ marginRight: 5, fontSize: 10 }}>
                РОСЭЛТОРГ
              </Typography.Text>
              <Typography.Text style={{ fontSize: 10 }}>дата публикации 07.04.2023</Typography.Text>
            </div>
            <div>
              <Button type="link" icon={<DownCircleOutlined />} />
              134
              <Button type="link" className="greenButton" icon={<UpCircleOutlined />} />
            </div>
          </div>
        </Col>

        <Col span={24}>
          <Typography.Title level={4} style={{ marginTop: 0 }}>
            Апрельские изменения в рамках 223-ФЗ и 44-ФЗ
          </Typography.Title>
          <img alt="" width={'100%'} src={PostImg} />
          <div className="tags">
            <Tag className="tagEl">#госзакупки</Tag>
            <Tag className="tagEl">#44-ФЗ</Tag>
            <Tag className="tagEl">#223-ФЗ</Tag>
          </div>
          <MessageOutlined /> 45 комментариев
        </Col>
      </Row>
    </Card>
  );
};

export default Post;