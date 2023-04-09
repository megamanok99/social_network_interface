import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BoldOutlined,
  FileAddOutlined,
  HeartOutlined,
  HighlightOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Button, Card, Dropdown, Input, Menu, Space, Tooltip } from 'antd';
import postIcon2 from '../../src/postIcon2.png';
import postIcon1 from '../../src/postIcon1.png';
const NewPost = () => {
  return (
    <Card>
      <Space.Compact
        block
        style={{
          flexWrap: 'wrap',
        }}>
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  key: '1',
                  label: '14px',
                },
                {
                  key: '2',
                  label: '15px',
                },
                {
                  key: '3',
                  label: '16px',
                },
              ]}
            />
          }
          trigger={['click']}>
          <Button> 14</Button>
        </Dropdown>
        <Tooltip title="Like">
          <Button icon={<BoldOutlined />} />
        </Tooltip>
        <Tooltip title="Comment">
          <Button icon={<UnderlineOutlined />} />
        </Tooltip>
        <Tooltip title="Comment">
          <Button icon={<ItalicOutlined />} />
        </Tooltip>{' '}
        <Tooltip title="Comment">
          <Button icon={<HighlightOutlined />} />
        </Tooltip>
        <Tooltip title="Star">
          <Button icon={<FileAddOutlined />} />
        </Tooltip>
        <Tooltip title="Heart">
          <Button icon={<HeartOutlined />} />
        </Tooltip>
        <Tooltip title="Share">
          <Button icon={<YoutubeOutlined />} />
        </Tooltip>
        <Tooltip title="Download">
          <Button icon={<AlignLeftOutlined />} />
        </Tooltip>
        <Tooltip title="Download">
          <Button icon={<img src={postIcon2} alt="" />} />
        </Tooltip>
        <Tooltip title="Download">
          <Button icon={<img src={postIcon1} alt="" />} />
        </Tooltip>
      </Space.Compact>

      <Input.TextArea placeholder="Поделитесь своими идеями..." style={{ marginTop: 9 }} />
    </Card>
  );
};
export default NewPost;
