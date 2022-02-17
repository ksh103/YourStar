import produce from 'immer';
const initialState = {
  createManagerLoading: false,
  createManagerDone: false,
  createManagerError: false,
  createdAccount: [],
};
export const CREATE_MANAGER_REQUEST = 'CREATE_MANAGER_REQUEST'; // 관계자 계정 생성
export const CREATE_MANAGER_SUCCESS = 'CREATE_MANAGER_SUCCESS';
export const CREATE_MANAGER_FAILURE = 'CREATE_MANAGER_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CREATE_MANAGER_REQUEST:
        draft.createManagerLoading = true;
        draft.createManagerDone = false;
        draft.createManagerError = null;
        break;
      case CREATE_MANAGER_SUCCESS:
        draft.createManagerLoading = false;
        draft.createManagerDone = true;
        draft.createdAccount = action.data;
        break;
      case CREATE_MANAGER_FAILURE:
        draft.createManagerLoading = false;
        draft.createManagerDone = false;
        // draft.createManagerError = action.error;
        break;
      default:
        break;
    }
  });
export default reducer;
