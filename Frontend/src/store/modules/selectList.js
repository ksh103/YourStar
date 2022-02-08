const CHANGE_LIST = 'CHANGE_LIST';
const DELETE_LIST = 'selectlist_CHANGE_LIST';

// export const changeList = selectNum => ({
//   type: CHANGE_LIST,
//   payload: selectNum,
// });

export const changeList = selectNum => {
  console.log('액션수행');
  return {
    type: CHANGE_LIST,
    payload: selectNum,
  };
};

export const deleteList = selectNum => ({ type: DELETE_LIST, selectNum });

/** 초기 상태 선언 */
const initialState = {
  selectNum: 0,
};

/* 리듀서 선언 */
export default function selectmode(state = initialState, action) {
  console.log('리듀서 실행');
  console.log(action);
  switch (action.type) {
    case CHANGE_LIST:
      console.log(action.payload, '리듀서에도 들어왔습니다.');
      return { ...state, selectNum: action.payload };
    default:
      return state;
  }
}
