import React from 'react';
import {
  ScheduleDetail1,
  ScheduleDetail2,
  ScheduleDetailRightWrapper,
} from './ScheduleDetail.style';

export default function ScheduleDetailRight({ meeting }) {
  return (
    <ScheduleDetailRightWrapper>
      <ScheduleDetail1>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>예매 시간</td>
              <td>{meeting.meeting_open_date}</td>
            </tr>

            <tr>
              <td>날짜</td>
              <td>{meeting.meeting_start_date}</td>
            </tr>

            <tr>
              <td>관람시간</td>

              <td>
                {meeting.meeting_start_date} - {meeting.meeting_end_date}
              </td>
            </tr>

            <tr>
              <td>인원</td>
              <td>{meeting.meeting_cnt} 명</td>
            </tr>

            <tr>
              <td>가격</td>
              <td>{meeting.meeting_price} 원</td>
            </tr>
          </tbody>
        </table>
      </ScheduleDetail1>
      <ScheduleDetail2>
        <p>{meeting.meeting_description}</p>
      </ScheduleDetail2>
    </ScheduleDetailRightWrapper>
  );
}
