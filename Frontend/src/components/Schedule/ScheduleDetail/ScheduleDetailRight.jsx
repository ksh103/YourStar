import React from 'react';
import moment from 'moment';
import {
  ScheduleDetail1,
  ScheduleDetail2,
  ScheduleDetailRightWrapper,
} from './ScheduleDetail.style';
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
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
// console.log(getTime('2022-02-04 12:00:00', '2022-02-04 14:50:00'));
export default function ScheduleDetailRight({ data }) {
  return (
    <ScheduleDetailRightWrapper>
      <ScheduleDetail1>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>예매 시간</td>
              <td>{changeDate(data.meetingOpenDate)}</td>
            </tr>
            <tr>
              <td>날짜</td>
              <td>{changeDate(data.meetingStartDate)}</td>
            </tr>
            <tr>
              <td>관람시간</td>
              <td>{getTime(data.meetingStartDate, data.meetingEndDate)}</td>
            </tr>
            <tr>
              <td>인원</td>
              <td>현재 등록된 사람수/{data.meetingCnt} 명</td>
            </tr>
            <tr>
              <td>가격</td>
              <td>{numberWithCommas(data.meetingPrice)} 원</td>
            </tr>
          </tbody>
        </table>
      </ScheduleDetail1>
      <ScheduleDetail2>
        <p>{data.meetingDescription}</p>
      </ScheduleDetail2>
    </ScheduleDetailRightWrapper>
  );
}
