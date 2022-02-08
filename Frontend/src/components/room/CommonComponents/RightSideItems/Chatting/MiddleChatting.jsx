import React from 'react';
import {
  MiddleChattingBox,
  MiddleChattingInputBox,
  MiddleChattingListBox,
  ThridSideDiv1,
  ThridSideDiv2,
  ThridSideDiv3,
} from './Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  ChattingInputChange,
  ChattingAction,
} from '../../../../../store/modules/meetingRoom';

export default function MiddleChatting() {
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
      <ThridSideDiv2>
        <MiddleChattingBox>
          <MiddleChattingListBox>
            {chattingList.map((value, idx) => {
              return (
                <div key={idx + value.text}>
                  <p>
                    {value.userName} : {value.text}
                  </p>
                </div>
              );
            })}
          </MiddleChattingListBox>
          <MiddleChattingInputBox
            onKeyPress={SendMessage}
            value={testInput}
            onChange={handleChatMessageChange}
          ></MiddleChattingInputBox>
        </MiddleChattingBox>
      </ThridSideDiv2>
    </>
  );
}
