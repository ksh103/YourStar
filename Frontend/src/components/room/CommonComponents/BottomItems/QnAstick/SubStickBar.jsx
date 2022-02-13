import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeQnAMode,
  changeQnAtoggle,
  AddQnaList,
} from '../../../../../store/modules/meetingRoom';

// dispatch action 사용하기! 이때는 넘겨주는 값이 있어야합니다.
// useSelectot  -> state의 정보 받아오기
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

// const TestInput = styled.div`
//   position: absolute;
//   outlint: 0.3vw solid black;
//   border-color: black;
//   width: 40vw;
//   height: 4vh;
//   border-radius: 3vh;
//   padding-left: 0.5vw;
//   margin: 1vw;
//   z-index: 1;
// `;
// 필요한 state
// 1. 유저 id 를 통한 구분
// 2. 모드변경에 따른 ui 구성 분기점 --> 분기점 만들었다!
// 3. 유저의 경우 입력창에 대한 정보처리 --> 리스트 형식으로의 입력, 유저정보에 따라 달라지게
// 4. 유저가 제출했을때의 상태 변경
export default function SubStickBar() {
  // QnA 입력을 위한것
  const [QnAText, setQnAText] = useState('');

  const valueChange = e => {
    setQnAText(e.target.value);
  };
  // qna가 시작되었는지 확인하기
  const { QnAmode, StarQnAtoggle } = useSelector(state => ({
    QnAmode: state.MeetingRoom.QnAmode,
    StarQnAtoggle: state.MeetingRoom.StarQnAtoggle,
  }));

  const { me } = useSelector(state => state.mypage);

  const { storeSession } = useSelector(state => ({
    storeSession: state.MeetingRoom.storeSession,
  }));
  const dispatch = useDispatch();

  // 모드 변경
  const QnAChange = str => {
    storeSession.signal({
      data: `${str}`,
      to: [],
      type: 'QnAmode',
    });
    dispatch(changeQnAMode(str));
  };
  // 유저 id에 따라서 바꾸어준다
  // 스타라면?
  const toggleChange = () => {
    dispatch(changeQnAtoggle());
  };

  // const UserQnAMessageByEnter = e => {
  //   if (e.key === 'Enter') {
  //     const QnAValue = {
  //       text: QnAText,
  //     };
  //     storeSession.signal({
  //       data: `${QnAText}`,
  //       to: [],
  //       type: 'UserQnA',
  //     });
  //     dispatch(AddQnaList(QnAValue));
  //     setQnAText('');
  //   }
  // };

  // const UserQnAMessageByClick = e => {
  //   const QnAValue = {
  //     userName: me.nick,
  //     text: QnAText,
  //   };
  //   storeSession.signal({
  //     data: `${QnAText}`,
  //     to: [],
  //     type: 'UserQnA',
  //   });
  //   dispatch(AddQnaList(QnAValue));
  //   setQnAText('');
  // };

  // storeSession.on('signal:QnAFromUser', event => {
  //   dispatch(AddQnaList({text : event.data}))
  // })

  if (me.code !== 3) {
    return (
      <>
        <StickBarDiv>
          <StickBar>
            <GridDiv>
              {/* 여기를 스토어로 바꿔주기 */}
              <InnerDiv onClick={() => QnAChange('start')}>Q&A 시작</InnerDiv>|
              <InnerDiv onClick={() => QnAChange('end')}>Q&A 종료</InnerDiv>|
              <InnerDiv onClick={() => toggleChange(StarQnAtoggle)}>
                Q&A 리스트
              </InnerDiv>
            </GridDiv>
          </StickBar>
        </StickBarDiv>
        {/* 유저ui 확인 */}
      </>
    );
  } 
  // 유저라면?
  else {
    return <></>
    // if (QnAmode === 'ready') {
    //   return (
    //     <StickBarDiv>
    //       <StickBar>
    //         <GridDiv>
    //           <>
    //             <div style={{ color: 'black' }}>
    //               스타가 시작하기를 눌리면 입력창이 나타납니다.
    //             </div>
    //           </>
    //         </GridDiv>
    //       </StickBar>
    //     </StickBarDiv>
    //   );
    // } else if (QnAmode === 'start') {
    //   return (
    //     <StickBarDiv>
    //       <StickBar>
    //         <GridDiv>
    //           <h2>Q.</h2>
    //           <UserInput type="text" onChange={valueChange} onKeyPress={UserQnAMessageByEnter} value={QnAText} ></UserInput>
    //           <button onClick={UserQnAMessageByClick}>제출하기</button>
    //         </GridDiv>
    //       </StickBar>
    //     </StickBarDiv>
    //   );
    // } else if (QnAmode === 'end') {
    //   return (
    //     <StickBarDiv>
    //       <StickBar>
    //         <GridDiv>
    //           <>
    //             <div style={{ color: 'black' }}>
    //               기다리시면 채택된 질문이 나옵니다.
    //             </div>
    //             <button>다시 작성하기</button>
    //           </>
    //         </GridDiv>
    //       </StickBar>
    //     </StickBarDiv>
    //   );
    // } else if (QnAmode === 'list') {
    //   return (
    //     <StickBarDiv>
    //       <StickBar>
    //         <GridDiv>
    //           <>
    //             <div style={{ color: 'black' }}>
    //               여러분들이 보내주신 질문들을 확인하고있어요..!
    //             </div>
    //           </>
    //         </GridDiv>
    //       </StickBar>
    //     </StickBarDiv>
    //   );
    }

    // return (
    //   <>
    //     <StickBarUserDiv>
    //       {userId === 1 ? (
    //         <StickBar>
    //           <GridDiv>
    //             {userSubmitState === true ? (
    //               <>
    //                 <div style={{ color: 'black' }}>
    //                   기다리시면 채택된 질문이 나옵니다.
    //                 </div>
    //                 <button>다시 작성하기</button>
    //               </>
    //             ) : (
    //               <>
    //                 <h2>Q.</h2>
    //                 <form>
    //                   <UserInput
    //                     value={QnAText}
    //                     onChange={valueChange}
    //                   ></UserInput>
    //                   <button>제출하기</button>
    //                 </form>
    //               </>
    //             )}
    //           </GridDiv>
    //         </StickBar>
    //       ) : (
    //         <>
    //           <StickBar>
    //             <GridDiv>
    //               <div style={{ color: 'black' }}>
    //                 QnA입력이 종료되었습니다. 기다리시면 채댁된 질문이 나옵니다.
    //               </div>
    //               <button>다시 작성하기</button>
    //             </GridDiv>
    //           </StickBar>
    //         </>
    //       )}
    //     </StickBarUserDiv>
    //   </>
    // );
  }
// }
