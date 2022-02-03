import produce from 'immer';
const initialState = {
  myPageLoading: false, // 마이페이지 정보
  myPageDone: false,
  myPageError: false,
};

export const MY_PAGE_REQUEST = 'MY_PAGE_REQUEST';
export const MY_PAGE_SUCCESS = 'MY_PAGE_SUCCESS';
export const MY_PAGE_FAILURE = 'MY_PAGE_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MY_PAGE_REQUEST:
        draft.myPageLoading = true;
        draft.myPageError = null;
        draft.myPageDone = false;
        break;
      default:
        break;
    }
  });
export default reducer;
