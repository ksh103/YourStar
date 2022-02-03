const CHANGE_QNA_MODE = 'CHANGE_QNA_MODE';
const CHATTING_LIST_PLUS = 'CHATTING_LIST_PLUS';

// QnA 모드를 변경하기위한 action
// 스타가 의 조작에 대한 action이라고 이해하면 된다.
// 0일 경우 qna start
// 1일 경우 qna 종료
// 2일 경우 qna 리스트 불러오기에 관한 조작이다.
export const changeQnAMode = number => {
  return {
    type: CHANGE_QNA_MODE,
    payload: Number(number),
  };
};

export const ChattingAction = inputValue => {
  return {
    type: CHATTING_LIST_PLUS,
    payload: inputValue,
  };
};

// 평소 컴포넌트에서 선언하던 state들!
const initialState = {
  // 초기에는 시작 안한 상태!
  QnAmode: 0,
  chattingList: [],
};

const MeetingRoom = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QNA_MODE:
      return {
        ...state,
        QnAmode: action.payload,
      };
    case CHATTING_LIST_PLUS:
      console.log('액션에따른 수행중');
      console.log(action);
      return {
        ...state,
        chattingList: [...state.chattingList, action.payload],
      };
    default:
      return state; // 기본 값 반환!
  }
};

export default MeetingRoom; // 외부에서도 사용할 수 있게 export 해준다
