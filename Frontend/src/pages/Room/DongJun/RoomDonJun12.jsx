import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const PastedDiv = styled.div`
  position: absolute;
  width: 100%;
  background-color: #e2d8ff;
  height: 100%;
`;

const UserList = [
  { name: '동준' },
  { name: '은성' },
  { name: '수민' },
  { name: '영원' },
  { name: '지슬' },
  { name: '소현' },
  { name: '빠롱츈' },
  { name: '박이먼도미닉' },
];

export default function RoomDonJun() {
  const [User, setUser] = useState(UserList);
  const [result, setResult] = useState('');

  // 이외 요소의 렌더링 방지를 위해
  const shuffleTarget = useRef();

  function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
  }

  const shuffle = ({ start, end, duration, render, finished }) => {
    console.log();
    const now = performance.now();
    const items = shuffleArray([...shuffleTarget.current.childNodes]);
    requestAnimationFrame(function move(time) {
      let timefraction = (time - now) / duration;
      const value = end * timefraction;
      const index = Math.floor(value % items.length);
      render(items, index);

      if (timefraction > 1) finished(items[index]);
      else requestAnimationFrame(move);
    });
  };

  const onShuffle = () => {
    shuffle({
      start: 0,
      end: 100,
      duration: 3000,
      render: (items, index) => {
        if (!items[index]) return;
        items.forEach(item => (item.style.display = 'none'));
        items[index].style.display = 'block';
      },
      finished: result => setResult(result),
    });
  };

  // 룰렛
  return (
    <PastedDiv>
      <h4>행운의 랜덤 추첨자는?!</h4>
      <button onClick={onShuffle}>랜덤추첨 Go!!</button>
      <section ref={shuffleTarget}>
        {User.map((P, i) => {
          // 유저리스트를 이용한 div 반환
          return <div key={`user${P}`} name={User.name} />;
        })}
      </section>
    </PastedDiv>
  );
}
