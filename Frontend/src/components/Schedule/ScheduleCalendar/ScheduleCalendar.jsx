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
  {
    id: 2,
    name: '김다미 팬미팅2',
    meeting_start_date: '2022-01-30 01:00:00',
  },
  {
    id: 3,
    name: '지수민',
    meeting_start_date: '2022-01-11 01:00:00',
  },
  {
    id: 4,
    name: '아이돌박동준',
    meeting_start_date: '2022-01-21 01:00:00',
  },
  {
    id: 5,
    name: '손은성',
    meeting_start_date: '2022-01-01 01:00:00',
  },
  {
    id: 6,
    name: '손은성',
    meeting_start_date: '2022-01-01 01:00:00',
  },
  {
    id: 7,
    name: '손은성',
    meeting_start_date: '2022-01-02 01:00:00',
  },
  {
    id: 8,
    name: '손은성',
    meeting_start_date: '2022-01-03 01:00:00',
  },
];
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

              const schedule = meeting.filter(
                m =>
                  current.format('YYYY-MM-DD') ===
                  m.meeting_start_date.slice(0, 10)
              );
              return (
                <ScheduleCalendarDay
                  className={`${isToday} ${isGrayed}`}
                  key={i}
                  date={current.format('D')}
                  schedule={schedule}
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
