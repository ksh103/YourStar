import React from 'react';
import {
  SmallBox,
  SmallChattingInputBox,
  SmallChattingListBox,
  HalfSideDiv1,
  HalfSideDiv2,
} from './Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  ChattingInputChange,
  ChattingAction,
} from '../../../../../store/modules/meetingRoom';

export default function SmallChatting() {
  const [testInput, setTestinput] = React.useState('');

  const dispatch = useDispatch();

  const SubmitText = Input => dispatch(ChattingInputChange(Input));
  const AppendChattingList = inputValue => dispatch(ChattingAction(inputValue));

  const handleChatMessageChange = e => {
    setTestinput(e.target.value);
  };

  const { storeSession, backgroundColor, chattingList } = useSelector(
    state => state.MeetingRoom
  );

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

  return (
    <>
      <HalfSideDiv2>
        <SmallBox>
          <SmallChattingListBox>
            {chattingList.map((value, idx) => {
              return (
                <div key={idx + value.text}>
                  <p>
                    {value.userName} : {value.text}
                  </p>
                </div>
              );
            })}
          </SmallChattingListBox>
          <SmallChattingInputBox
            onKeyPress={SendMessage}
            value={testInput}
            onChange={handleChatMessageChange}
            color={backgroundColor} // redux에서 받아온 color를 input styled에 넣어주기
          ></SmallChattingInputBox>
        </SmallBox>
      </HalfSideDiv2>
    </>
  );
}
