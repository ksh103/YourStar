import produce from 'immer';
const initialState = {
  me: {
    memberId: 0,
    code: 0,
    managerCode: 0,
    email: '',
    password: '',
    name: '',
    nick: '',
    phone: '',
    address: '',
    birth: '',
    gender: '',
    isLogin: '',
  },
  myPageLoading: false, // 마이페이지 정보
  myPageDone: false,
  myPageError: false,
  updateMemberLoading: false, // 회원수정
  updateMemberDone: false,
  updateMemberError: false,
  deleteMemberLoading: false, // 회원탈퇴
  deleteMemberDone: false,
  deleteMemberError: false,
};

export const MY_PAGE_REQUEST = 'MY_PAGE_REQUEST';
export const MY_PAGE_SUCCESS = 'MY_PAGE_SUCCESS';
export const MY_PAGE_FAILURE = 'MY_PAGE_FAILURE';

export const UPDATE_MEMBER_REQUEST = 'UPDATE_MEMBER_REQUEST';
export const UPDATE_MEMBER_SUCCESS = 'UPDATE_MEMBER_SUCCESS';
export const UPDATE_MEMBER_FAILURE = 'UPDATE_MEMBER_FAILURE';

export const DELETE_MEMBER_REQUEST = 'DELETE_MEMBER_REQUEST';
export const DELETE_MEMBER_SUCCESS = 'DELETE_MEMBER_SUCCESS';
export const DELETE_MEMBER_FAILURE = 'DELETE_MEMBER_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MY_PAGE_REQUEST:
        draft.myPageLoading = true;
        draft.myPageError = null;
        draft.myPageDone = false;
        break;
      case MY_PAGE_SUCCESS:
        draft.myPageLoading = false;
        draft.myPageDone = true;
        break;
      case MY_PAGE_FAILURE:
        draft.myPageLoading = false;
        draft.myPageError = action.error;
        break;
      case UPDATE_MEMBER_REQUEST:
        draft.updateMemberLoading = true;
        draft.updateMemberError = null;
        draft.updateMemberDone = false;
        break;
      case UPDATE_MEMBER_SUCCESS:
        draft.updateMemberLoading = false;
        draft.updateMemberDone = true;
        break;
      case UPDATE_MEMBER_FAILURE:
        draft.updateMemberLoading = false;
        draft.updateMemberError = action.error;
        break;
      case DELETE_MEMBER_REQUEST:
        draft.deleteMemberLoading = true;
        draft.deleteMemberError = null;
        draft.deleteMemberDone = false;
        break;
      case DELETE_MEMBER_SUCCESS:
        draft.deleteMemberLoading = false;
        draft.deleteMemberDone = true;
        break;
      case DELETE_MEMBER_FAILURE:
        draft.deleteMemberLoading = false;
        draft.deleteMemberError = action.error;
        break;
      default:
        break;
    }
  });
export default reducer;
