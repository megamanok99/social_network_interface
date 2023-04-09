import { Card, Progress, Typography } from 'antd';

const AchiveBadge = ({ Img, title, descr, percent, needHeader }) => {
  return (
    <>
      {needHeader && <Typography.Title level={3}>Следующее достижение</Typography.Title>}
      <div
        style={{
          display: 'flex',
          backgroundColor: '#DBE7FF',
          alignContent: 'center',
          borderRadius: '10px',
          alignItems: 'center',
          padding: 10,
          marginBottom: 10,
        }}>
        <div>
          <Img style={{ marginRight: 5 }} />
        </div>
        <div style={{ width: '100%' }}>
          <Typography.Title level={4}>{title}</Typography.Title>
          <Typography.Title level={5}>{descr}</Typography.Title>
          {percent && <Progress percent={percent} />}
        </div>
      </div>
    </>
  );
};
export default AchiveBadge;
