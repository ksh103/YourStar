import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlusIndex, CheckOut } from '../../../store/modules/meetingRoom';

export default function Timer() {
  const STAR_WAIT_TIME = 5; // 스타가 다음 미팅까지 대기하는 시간
  const MEETING_ALL_TIME_SEC = 60; // 미팅 진행시간 총합을 초로계산한 합

  const [isCome, setIsCome] = useState(true);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const timerId = useRef(null);
  const { me } = useSelector(state => state.mypage);

  // 스타와 유저가 보이는 시간을 다르게 표시하기 위함
  // 스타는 대기가 먼저, 유저는 들어오자 마자 미팅 남은 시간 표시
  let timeValue = STAR_WAIT_TIME;
  if (me.code === 3) timeValue = MEETING_ALL_TIME_SEC;
  const time = useRef(timeValue);

  const dispatch = useDispatch();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    // 시간 종료시 마다 새로운 사람을 데려오기
    if (time.current < 0) {
      if (me.code === 4) {
        if (isCome) {
          time.current = MEETING_ALL_TIME_SEC;
          setIsCome(false);
          dispatch(PlusIndex());
        } else {
          time.current = STAR_WAIT_TIME;
          setIsCome(true);
          dispatch(CheckOut());
        }
      } else {
        time.current = MEETING_ALL_TIME_SEC;
      }
    }
  }, [sec, dispatch, isCome, me]);

  return (
    <div className="timer">
      {min} : {sec}
      {me.code === 4 && isCome ? <div>대기중</div> : <div>미팅중</div>}
      {me.code === 4 && !isCome ? <div>미팅중</div> : null}
    </div>
  );
}
