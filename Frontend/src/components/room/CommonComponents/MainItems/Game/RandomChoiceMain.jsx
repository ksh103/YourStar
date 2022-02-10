import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { MainDiv } from '../Main.style';
import { useSelector } from 'react-redux';
import StarVideoComponent from '../../../../../pages/Room/StarVideoComponent';
// 60vw 가로폭
const RandomChoiceSc = styled.div`
  position: relative;
  width: 28.041vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
  margin-right: 4vw;
`;

const MId = styled.div`
  width

`;

const MainGrid = styled.div`
  width: 100%;
  heigth: 100%;
  display: inline-flex;
`;

const UserList = [
  '동준',
  '지슬',
  '은성',
  '수민',
  '영원',
  '소현',
  '쌈디',
  '물소가이',
  '공혁준',
  '육지담',
];
//git commit -m "[S06P12E204-261] FE-미팅룸UI: RandomGame생성&미팅룸redux 생성 &  "
const shuffleArray = array => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function RandomChoiceMain() {
  const [result, setResult] = useState(''); // 변경점
  const shuffleTarget = useRef();

  const shuffle = ({ start, end, duration, render, finished }) => {
    const now = performance.now(); // 지금 렌더된 당시의 시간
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
      finished: result => setResult(result.innerText),
    });
  };
  const { mainStreamManager } = useSelector(state => ({
    mainStreamManager: state.MeetingRoom.mainStreamManager,
  }));
  // const items = shuffleArray([...shuffleTarget.current.childNodes]);
  // console.log(items);
  return (
    <MainDiv>
      <MainGrid>
        <RandomChoiceSc>
          {mainStreamManager && (
            <StarVideoComponent streamManager={mainStreamManager} />
          )}
        </RandomChoiceSc>
        <RandomChoiceSc>
          <button onClick={onShuffle}>돌려돌려 돌림판!</button>
          <div ref={shuffleTarget}>
            {UserList.map((value, idx) => (
              <h1 key={`number${idx}`} style={{ color: 'black' }}>
                {value}
              </h1>
            ))}
          </div>
        </RandomChoiceSc>
      </MainGrid>
    </MainDiv>
  );
}
