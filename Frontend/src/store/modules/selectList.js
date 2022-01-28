const CHANGE_LIST = 'selectlist_CHANGE_LIST';
const DELETE_LIST = 'selectlist_CHANGE_LIST';

export const changeList = selectNum => ({ type: CHANGE_LIST, selectNum });
export const deleteList = selectNum => ({ type: DELETE_LIST, selectNum });

/** 초기 상태 선언 */
const initialState = {
  selectNum: 0,
};

/* 리듀서 선언 */
export default function selectmode(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LIST:
      console.log(action.selectNum);
      return { ...state, selectNum: action.selectNum };
    default:
      return state;
  }
}
