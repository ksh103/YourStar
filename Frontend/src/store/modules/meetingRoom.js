const CHANGE_QNA_MODE = 'CHANGE_QNA_MODE';
const CHATTING_LIST_PLUS = 'CHATTING_LIST_PLUS';
const MEETINGROOM_USER_UPDATE = 'MEETINGROOM_USER_UPDATE';
const PUBLISHER_INFO = 'PUBLISHER_INFO';
const USER_INFO = 'USER_INFO';
const UPDATE_MAINSTREMMANAGER = 'UPDATE_MAINSTREMMANAGER';

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

// 미팅룸에서 새로 들어온 subscriber를 업데이트하는 action
export const UserUpdate = subscriber => {
  return {
    type: MEETINGROOM_USER_UPDATE,
    payload: subscriber,
  };
};

//내 정보에 대해서 업데이트 한다.
// 미팅룸 컴포넌트에서 토큰을 통해 얻은 publisher 정보를 받고,
// 이를 store에 저장시키기 위한 action
export const UpdateMyInformation = publisher => {
  return {
    type: PUBLISHER_INFO,
    payload: publisher,
  };
};

export const GetUserInfo = () => {
  return {
    type: USER_INFO,
  };
};

export const MainStreamManagerInfo = mainStreamManager => {
  return {
    type: UPDATE_MAINSTREMMANAGER,
    payload: mainStreamManager,
  };
};

// 평소 컴포넌트에서 선언하던 state들!
const initialState = {
  // 초기에는 시작 안한 상태!
  QnAmode: 0,
  chattingList: [],
  subscribers: [],
  publisher: undefined,
  // 임시로 사용하는 유저아이디
  userId: 1,
  mainStreamManager: undefined,
};

const MeetingRoom = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_QNA_MODE:
      return {
        ...state,
        QnAmode: action.payload,
      };
    case CHATTING_LIST_PLUS:
      console.log('액션에따른 채팅 수행중');
      console.log(action, '채팅에대해서 넘겨받은 payload');
      return {
        ...state,
        chattingList: [...state.chattingList, action.payload],
      };
    case MEETINGROOM_USER_UPDATE:
      return {
        ...state,
        subscribers: [...state.subscribers, action.payload],
      };
    case PUBLISHER_INFO:
      console.log('내 정보가 들어오고 있습니다');
      return {
        ...state,
        publisher: action.payload,
      };
    case USER_INFO:
      console.log('유저정보를 가져옵니다.');
      return {
        ...state,
      };
    case UPDATE_MAINSTREMMANAGER:
      console.log('메인스트리머 지정');
      return {
        ...state,
        mainStreamManager: action.payload,
      };
    default:
      return state; // 기본 값 반환!
  }
};

export default MeetingRoom; // 외부에서도 사용할 수 있게 export 해준다
