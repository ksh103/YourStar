import React, { useState } from 'react';
import moment from 'moment';
import {
  SchduleCalendarWrapper,
  Header,
  DateContainer,
  Weekend,
  Dow,
} from './ScheduleCalendar.style';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ScheduleCalendarDay from './ScheduleCalendarDay';

const meeting = [
  {
    id: 1,
    name: '김다미 팬미팅1',
    meeting_start_date: '2022-01-30 14:00:00',
  },
];
const dd = new Date(meeting[0].meeting_start_date);
console.log(dd);
export default function ScheduleCalendar() {
  const [date, setDate] = useState(moment());
  const movePrevMonth = () => {
    setDate(date.clone().subtract(1, 'month'));
  };
  const moveNextMonth = () => {
    setDate(date.clone().add(1, 'month'));
  };
  const generate = () => {
    //일년은 52주
    const startWeek = date.clone().startOf('month').week();
    const endWeek =
      date.clone().endOf('month').week() === 1
        ? 53
        : date.clone().endOf('month').week();
    //날짜
    const calendar = [];

    for (let w = startWeek; w <= endWeek; w++) {
      calendar.push(
        <Weekend className="row" key={w}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              //오늘 => 주어진 주의 시작=> n+id일만큼 더해서 각 주의 '일'을 표기한다.
              let current = date
                .clone()
                .week(w)
                .startOf('week')
                .add(n + i, 'day');

              // 오늘이 current와 같다면우선 ' 선택'으로 두자
              let isToday =
                moment().format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'today'
                  : '';

              // 만약, 이번 달이 아닌 다른 달의 날짜라면 회색으로 표시
              let isGrayed =
                current.format('MM') !== date.format('MM') ? 'grayed' : '';

              return (
                <ScheduleCalendarDay
                  className={`${isToday} ${isGrayed}`}
                  key={i}
                  date={current.format('D')}
                />
              );
            })}
        </Weekend>
      );
    }
    return calendar;
  };
  return (
    <SchduleCalendarWrapper>
      <Header>
        <MdChevronLeft className="dir" onClick={movePrevMonth} />
        <span>{date.format('M월')}</span>
        <MdChevronRight className="dir" onClick={moveNextMonth} />
      </Header>
      <DateContainer>
        <Weekend>
          <Dow color="#ff4b4b">SUN</Dow>
          <Dow>MON</Dow>
          <Dow>TUE</Dow>
          <Dow>WED</Dow>
          <Dow>THU</Dow>
          <Dow>FRI</Dow>
          <Dow color="#4b87ff">SAT</Dow>
        </Weekend>
        {generate()}
      </DateContainer>
    </SchduleCalendarWrapper>
  );
}
