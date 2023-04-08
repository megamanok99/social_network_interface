import { Badge, Calendar } from 'antd';
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'Регистрация в процедуре №451',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'Регистрация заявки №748',
        },
        {
          type: 'success',
          content: 'Ответ заказчика по заявке №451',
        },
        {
          type: 'error',
          content: 'Получени жалобы по заявке №123',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'success',
          content: 'Ответ заказчика по заявке №451',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const taskCalendar = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <span>Проведение процедуры {num}</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };
  return <Calendar cellRender={cellRender} />;
};
export default taskCalendar;
