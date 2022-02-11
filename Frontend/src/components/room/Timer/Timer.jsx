import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PlusIndex } from '../../../store/modules/meetingRoom';

export default function Timer() {
  const [isCome, setIsCome] = useState(true);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(5);
  const time = useRef(5);
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
      if (isCome) {
        time.current = 10;
        setIsCome(false);
        dispatch(PlusIndex());
      } else {
        time.current = 5;
        setIsCome(true);
      }
    }
  }, [sec, dispatch, isCome]);

  return (
    <div className="timer">
      {min} : {sec}
      {isCome ? <div>대기중</div> : <div>미팅중</div>}
    </div>
  );
}
