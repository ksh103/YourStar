import produce from 'immer';
const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  findPwLoading: false, // 비밀번호 시도중
  findPwDone: false,
  findPwError: null,
  updateMemberLoading: false, // 회원수정
  updateMemberDone: false,
  updateMemberError: false,
  deleteMemberLoading: false, // 회원탈퇴
  deleteMemberDone: false,
  deleteMemberError: false,
  me: null,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FIND_PW_REQUEST = 'FIND_PW_REQUEST';
export const FIND_PW_SUCCESS = 'FIND_PW_SUCCESS';
export const FIND_PW_FAILURE = 'FIND_PW_FAILURE';

export const UPDATE_MEMBER_REQUEST = 'UPDATE_MEMBER_REQUEST';
export const UPDATE_MEMBER_SUCCESS = 'UPDATE_MEMBER_SUCCESS';
export const UPDATE_MEMBER_FAILURE = 'UPDATE_MEMBER_FAILURE';

export const DELETE_MEMBER_REQUEST = 'DELETE_MEMBER_REQUEST';
export const DELETE_MEMBER_SUCCESS = 'DELETE_MEMBER_SUCCESS';
export const DELETE_MEMBER_FAILURE = 'DELETE_MEMBER_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case FIND_PW_REQUEST:
        draft.findPwLoading = true;
        draft.findPwError = null;
        draft.findPwDone = false;
        break;
      case FIND_PW_SUCCESS:
        draft.findPwLoading = false;
        draft.findPwDone = true;
        break;
      case FIND_PW_FAILURE:
        draft.findPwLoading = false;
        draft.findPwError = action.error;
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
