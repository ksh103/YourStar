import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import EmoziBar from '../CommonComponents/BottomItems/Emozi/EmoziBar';
import { HalfSideDiv1 } from '../CommonComponents/RightSideItems/Chatting/Chatting.style';
import {
  ConcertChattingBox,
  ConcertChattingInputBox,
  ConcertChattingListBox,
  StarSmallChattingListBox,
  StarSmallChattingInputBox,
  StarSmallBox,
  HalfSideDiv2,
} from '../CommonComponents/RightSideItems/Chatting/Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  ChattingAction,
  ChattingInputChange,
  ScreenChange,
} from '../../../store/modules/meetingRoom';
import StarVideoComponent from '../../../pages/Room/StarVideoComponent';
import ScheduleListSelect from '../CommonComponents/RightSideItems/Star/ScheduleListSelect';

const ConcertWrapper = styled.div`
  position: absolute;
  top: 4%;
  left: 8%;
`;

const ConcertDisplayBox = styled.div`
  position: absolute;
  border-radius: 1vh;
  height: 75vh;
  width: 63vw;
`;

const HolePlace = styled.div`
  position: absolute;
  top: 64vh;
  left: 57.5vw;
  font-size: 4vw;
  z-index: 10;
  animation: 0.6s ease-in-out infinite loadEffect3;

  @keyframes loadEffect3 {
    65% {
      opacity: 1;
      transform: scale(1.01);
    }
    85% {
      opacity: 1;
      transform: scale(0.97);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const EmoziBox = styled.div`
  position: absolute;
  bottom: -72vh;
  margin-left: 58.5vw;
  border-radius: 1vw;
  height: 72vh;
  width: 2vw;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
`;

const EmoziEffect = styled.div`
  vertical-align: bottom;
  position: absolute;
  bottom: 21px;
  font-size: 2vw;
  width: 50px;
  height: 20px;
  background-size: cover;
  animation: bubble 5s linear;
  @keyframes bubble {
    0% {
      bottom: 2vh;
      opacity: 1;
    }
    to {
      bottom: 70vh;
      opacity: 0;
    }
  }
`;

export default function Concert() {
  const [testInput, setTestinput] = React.useState('');

  const dispatch = useDispatch();

  const SubmitText = Input => dispatch(ChattingInputChange(Input));
  const AppendChattingList = inputValue => dispatch(ChattingAction(inputValue));

  const SetSelect = selectNum => dispatch(ScreenChange(selectNum));
  const handleChatMessageChange = e => {
    setTestinput(e.target.value);
  };

  const {
    storeSession,
    backgroundColor,
    chattingList,
    emoziList,
    mainStreamManager,
  } = useSelector(state => state.MeetingRoom);

  const { me } = useSelector(state => state.mypage);

  const SendMessage = e => {
    if (e.key === 'Enter') {
      const inputValue = {
        userName: me.nick,
        text: testInput,
        chatClass: 'messages__item--operator',
      };
      storeSession.signal({
        data: `${me.nick},${testInput}`,
        to: [],
        type: 'chat',
      });
      SubmitText(testInput);
      AppendChattingList(inputValue);
      setTestinput('');
    }
  };

  // 채팅 스크롤 아래로 내려주기
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    // 채팅 리스트가 업데이트 될 때마다 제일 아래로 내려주기
    scrollToBottom();
  }, [chattingList]);

  return (
    <div>
      <ConcertWrapper>
        <ConcertDisplayBox>
          {mainStreamManager && (
            <StarVideoComponent streamManager={mainStreamManager} />
          )}
        </ConcertDisplayBox>

        <EmoziBox>
          {emoziList.map((emozi, idx) => {
            return (
              <div key={idx + emozi}>
                <EmoziEffect>
                  <span className="test">{emozi}</span>
                </EmoziEffect>
              </div>
            );
          })}
        </EmoziBox>
        <HolePlace>
          {console.log('8')}
          🎁
        </HolePlace>
      </ConcertWrapper>

      {me.code === 3 ? (
        <HalfSideDiv1>
          <ConcertChattingBox>
            <ConcertChattingListBox>
              {chattingList.map((value, idx) => {
                return (
                  <div key={idx + value.text}>
                    <p style={{ margin: '0' }}>
                      {value.userName} : {value.text}
                    </p>
                  </div>
                );
              })}
              <div ref={messagesEndRef}></div>{' '}
              {/**채팅 스크롤 아래로 내려주기 */}
            </ConcertChattingListBox>
            <ConcertChattingInputBox
              onKeyPress={SendMessage}
              value={testInput}
              onChange={handleChatMessageChange}
              color={backgroundColor}
            ></ConcertChattingInputBox>
          </ConcertChattingBox>
        </HalfSideDiv1>
      ) : (
        <>
          <ScheduleListSelect></ScheduleListSelect>
          <HalfSideDiv2>
            <StarSmallBox>
              <StarSmallChattingListBox>
                {chattingList.map((value, idx) => {
                  return (
                    <div key={idx + value.text}>
                      <p style={{ margin: '0' }}>
                        {value.userName} : {value.text}
                      </p>
                    </div>
                  );
                })}
                <div ref={messagesEndRef}></div>{' '}
                {/**채팅 스크롤 아래로 내려주기 */}
              </StarSmallChattingListBox>
              <StarSmallChattingInputBox
                onKeyPress={SendMessage}
                value={testInput}
                onChange={handleChatMessageChange}
                color={backgroundColor}
                placeholder="메시지 보내기"
              ></StarSmallChattingInputBox>
            </StarSmallBox>
          </HalfSideDiv2>
        </>
      )}

      <EmoziBar></EmoziBar>
    </div>
  );
}
