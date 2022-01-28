import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StickBar = styled.div`
  width: 60.1416vw;
  height: 5.517vh;
  background-color: white;
  border-radius: 3vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const StickBarDiv = styled.div`
  position: absolute;
  top: 65.5%;
  left: 8%;
`;

// 잠시 확인용 삭제가능
const StickBarUserDiv = styled.div`
  position: absolute;
  top: 50.5%;
  left: 8%;
`;

const GridDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2vw;
  color: black;
`;

const InnerDiv = styled.button`
  margin: 1vw;
  color: black;
`;

const UserInput = styled.input`
  outlint: 0.3vw solid black;
  border-color: black;
  width: 40vw;
  height: 4vh;
  border-radius: 3vh;
  padding-left: 0.5vw;
  margin: 1vw;
`;

const RoomDonJun = () => {
  const [QnAMode, setQnAMode] = useState(0);
  const [userId, setUserId] = useState(1);
  const [QnAText, setQnAText] = useState('');
  const [QnAList, setQnAList] = useState([]);
  const [submitFlag, setsubmitFlag] = useState(false);

  // useEffect
  useEffect(() => {
    console.log('제출상황');
    console.log(submitFlag);
  }, [submitFlag]);
  // 0 : user, 1 : star
  const qnaStart = e => {
    setQnAMode(e);
    console.log(e, '모드변경');
    if (e === 0) {
      //모든 유저상태 변경을 시켜 주어야함!
      setsubmitFlag(false);
    } else if (e === 1) {
      setsubmitFlag(true);
    } else {
      console.log('모드를 스티커가 보이게 변경시켜주어야함');
    }
  };

  const submitQnA = e => {
    e.preventDefault();
    setQnAList([...QnAList, e.target[0].value]);
    setsubmitFlag(true);
    setQnAText('');
  };

  const valueChange = e => {
    console.log(e.target.value);
    setQnAText(e.target.value);
  };

  if (userId === 1) {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: '#E2D8FF',
          height: '100%',
          backgroundImage: 'none',
        }}
      >
        <h1>유저 UI</h1>
        <StickBarUserDiv>
          <StickBar>
            <GridDiv>
              {submitFlag === true ? (
                <>
                  <div style={{ color: 'black' }}>
                    기다리시면 채택된 질문이 나옵니다.
                  </div>
                  <button>다시 작성하기</button>
                </>
              ) : (
                <>
                  <h2>Q.</h2>
                  <form onSubmit={submitQnA}>
                    <UserInput
                      value={QnAText}
                      onChange={valueChange}
                    ></UserInput>
                    <button onSubmit={submitQnA}>제출하기</button>
                  </form>
                </>
              )}
            </GridDiv>
          </StickBar>
        </StickBarUserDiv>

        <h1>스타 UI</h1>
        <StickBarDiv>
          <StickBar>
            <GridDiv>
              <InnerDiv onClick={() => qnaStart(0)}>Q&A 시작</InnerDiv>|
              <InnerDiv onClick={() => qnaStart(1)}>Q&A 종료</InnerDiv>|
              <InnerDiv onClick={() => qnaStart(2)}>Q&A 리스트</InnerDiv>
            </GridDiv>
          </StickBar>
        </StickBarDiv>
      </div>
    );
  } else {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: '#E2D8FF',
          height: '100%',
          backgroundImage: 'none',
        }}
      >
        <StickBarDiv>
          <StickBar>
            <GridDiv>
              {submitFlag === true ? (
                <>
                  <div style={{ color: 'black' }}>
                    기다리시면 채택된 질문이 나옵니다.
                  </div>
                  <button>다시 작성하기</button>
                </>
              ) : (
                <>
                  <h2>Q.</h2>
                  <form onSubmit={submitQnA}>
                    <UserInput
                      value={QnAText}
                      onChange={valueChange}
                    ></UserInput>
                    <button onSubmit={submitQnA}>제출하기</button>
                  </form>
                </>
              )}
            </GridDiv>
          </StickBar>
        </StickBarDiv>
      </div>
    );
  }
};

export default RoomDonJun;
