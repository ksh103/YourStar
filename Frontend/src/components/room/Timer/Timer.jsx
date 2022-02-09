import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlusIndex } from '../../../store/modules/meetingRoom';

export default function Timer() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(10);
  const time = useRef(10);
  const timerId = useRef(null);

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
      time.current = 10;
      dispatch(PlusIndex());
    }
  }, [sec, dispatch]);

  return (
    <div className="timer">
      {min} : {sec}
    </div>
  );
}
