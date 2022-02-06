import React from 'react';
import moment from 'moment';
import {
  ScheduleDetail1,
  ScheduleDetail2,
  ScheduleDetailRightWrapper,
} from './ScheduleDetail.style';
import { useSelector } from 'react-redux';

const changeDate = d => {
  const date = moment(d, 'YYYY-MM-DD HH:mm:ss');
  return date.format('YYYY년 MM월 DD일 HH시 mm분');
};
const getTime = (a, b) => {
  const date1 = moment(b, 'YYYY-MM-DD HH:mm:ss');
  const date2 = moment(a, 'YYYY-MM-DD HH:mm:ss');
  let time = date1.diff(date2, 'minutes') + '분';
  return time;
};
const numberWithCommas = x => {
  x = String(x);
  return x.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};
export default function ScheduleDetailRight() {
  const { meeting } = useSelector(state => state.meeting);

  return (
    <ScheduleDetailRightWrapper>
      {meeting && (
        <>
          <ScheduleDetail1>
            <table>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>예매 시간</td>
                  <td>{changeDate(meeting.openDate)}</td>
                </tr>
                <tr>
                  <td>날짜</td>
                  <td>{changeDate(meeting.startDate)}</td>
                </tr>
                <tr>
                  <td>관람시간</td>
                  <td>{getTime(meeting.startDate, meeting.endDate)}</td>
                </tr>
                <tr>
                  <td>인원</td>
                  <td>현재 등록된 사람수/{meeting.cnt} 명</td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>{numberWithCommas(meeting.price)} 원</td>
                </tr>
              </tbody>
            </table>
          </ScheduleDetail1>
          <ScheduleDetail2>
            <p>{meeting.description}</p>
          </ScheduleDetail2>
        </>
      )}
    </ScheduleDetailRightWrapper>
  );
}
