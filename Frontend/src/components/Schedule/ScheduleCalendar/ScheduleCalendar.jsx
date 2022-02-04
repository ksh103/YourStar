import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { APPROVED_MEETINGS_REQUEST } from '../../../store/modules/meeting';

export default function ScheduleCalendar() {
  const dispatch = useDispatch();
  const { approvedMeetings, approvedMeetingsDone } = useSelector(
    state => state.meeting
  );
  const [date, setDate] = useState(moment());
  useEffect(() => {
    if (!approvedMeetingsDone) {
      dispatch({
        type: APPROVED_MEETINGS_REQUEST,
        data: { page: 1, size: 10 },
      });
    }
  }, [dispatch, approvedMeetingsDone]);

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

              const schedule = approvedMeetings.filter(
                m =>
                  current.format('YYYY-MM-DD') ===
                  m.meetingStartDate.slice(0, 10)
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
        {approvedMeetingsDone && generate()}
      </DateContainer>
    </SchduleCalendarWrapper>
  );
}
