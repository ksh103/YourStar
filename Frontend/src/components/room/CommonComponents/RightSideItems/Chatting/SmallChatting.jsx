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

  const { chattingList } = useSelector(state => ({
    chattingList: state.MeetingRoom.chattingList,
  }));

  const dispatch = useDispatch();

  const SubmitText = Input => dispatch(ChattingInputChange(Input));
  const AppendChattingList = inputValue => dispatch(ChattingAction(inputValue));

  const handleChatMessageChange = e => {
    setTestinput(e.target.value);
  };

  const { userNickName } = useSelector(state => ({
    userNickName: state.MeetingRoom.userNickName,
  }));

  const SendMessage = e => {
    if (e.key === 'Enter') {
      const inputValue = {
        userName: userNickName,
        text: testInput,
        chatClass: 'messages__item--operator',
      };
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
          ></SmallChattingInputBox>
        </SmallBox>
      </HalfSideDiv2>
    </>
  );
}
