import React from 'react';
import {
  LongChattingInputBox,
  LongChattingListBox,
  HalfSideDiv1,
  LongChattingBox,
} from './Chatting.style';
import { useSelector, useDispatch } from 'react-redux';
import {
  ChattingInputChange,
  ChattingAction,
} from '../../../../../store/modules/meetingRoom';

export default function LongChatting() {
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

  const { me } = useSelector(state => state.mypage);

  const SendMessage = e => {
    if (e.key === 'Enter') {
      const inputValue = {
        userName: me.nick,
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
      <HalfSideDiv1>
        <LongChattingBox>
          <LongChattingListBox>
            {chattingList.map((value, idx) => {
              return (
                <div key={idx + value.text}>
                  <p>
                    {value.userName} : {value.text}
                  </p>
                </div>
              );
            })}
          </LongChattingListBox>
          <LongChattingInputBox
            onKeyPress={SendMessage}
            value={testInput}
            onChange={handleChatMessageChange}
          ></LongChattingInputBox>
        </LongChattingBox>
      </HalfSideDiv1>
    </>
  );
}
