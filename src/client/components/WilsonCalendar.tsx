import { Calendar } from 'antd';
import { Post } from 'common';
import * as moment from 'moment';
import * as React from 'react';

const getListData = (value: moment.Moment) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'normal', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
};

interface Props {
  posts?: Post[];
}

export default class WilsonCalendar extends React.Component<Props, object> {
  dateCellRender(value: moment.Moment) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (
            <li key={item.content}>
              <span className={`event-${item.type}`}>●</span>
              {item.content}
            </li>
          ))
        }
      </ul>
    );
  }

  getMonthData(value: moment.Moment) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  monthCellRender(value: moment.Moment) {
    const num = this.getMonthData(value);
    return num ? <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div> : null;
  }

  render() {
    return (
      <Calendar
        dateCellRender={this.dateCellRender.bind(this)}
        monthCellRender={this.monthCellRender.bind(this)}
      />
    );
  }
}
