import produce from 'immer';

const initialState = {
  applicant: [],
  insertFanMeetingLoading: false, // 미팅신청
  insertFanMeetingDone: false,
  insertFanMeetingError: null,
  selectFanMeetingLoading: false, // 미팅 내역 확인
  selectFanMeetingDone: false,
  selectFanMeetingError: null,
  deleteFanMeetingLoading: false, // 미팅 삭제
  deleteFanMeetingDone: false,
  deleteFanMeetingError: null,
};
export const INSERT_FANMEETING_REQUEST = 'INSERT_FANMEETING_REQUEST'; // 미팅 에매(사용자)
export const INSERT_FANMEETING_SUCCESS = 'INSERT_FANMEETING_SUCCESS';
export const INSERT_FANMEETING_FAILURE = 'INSERT_FANMEETING_FAILURE';

export const DELETE_FANMEETING_REQUEST = 'DELETE_FANMEETING_REQUEST'; // 미팅 예매취소(사용자)
export const DELETE_FANMEETING_SUCCESS = 'DELETE_FANMEETING_SUCCESS';
export const DELETE_FANMEETING_FAILURE = 'DELETE_FANMEETING_FAILURE';

export const SELECT_FANMEETING_REQUEST = 'SELECT_FANMEETING_REQUEST'; // 미팅 내역확인(사용자)
export const SELECT_FANMEETING_SUCCESS = 'SELECT_FANMEETING_SUCCESS';
export const SELECT_FANMEETING_FAILURE = 'SELECT_FANMEETING_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INSERT_FANMEETING_REQUEST:
        draft.insertFanMeetingLoading = true;
        draft.insertFanMeetingDone = false;
        draft.insertFanMeetingError = null;
        break;
      case INSERT_FANMEETING_SUCCESS:
        draft.insertFanMeetingLoading = false;
        draft.insertFanMeetingDone = true;
        break;
      case INSERT_FANMEETING_FAILURE:
        draft.insertFanMeetingLoading = false;
        draft.insertFanMeetingError = action.error;
        break;
      case DELETE_FANMEETING_REQUEST:
        draft.deleteFanMeetingLoading = true;
        draft.deleteFanMeetingDone = false;
        draft.deleteFanMeetingError = null;
        break;
      case DELETE_FANMEETING_SUCCESS:
        draft.deleteFanMeetingLoading = false;
        draft.deleteFanMeetingDone = true;
        break;
      case DELETE_FANMEETING_FAILURE:
        draft.deleteFanMeetingLoading = false;
        draft.deleteFanMeetingError = action.error;
        break;
      case SELECT_FANMEETING_REQUEST:
        draft.selectFanMeetingLoading = true;
        draft.selectFanMeetingDone = false;
        draft.selectFanMeetingError = null;
        break;
      case SELECT_FANMEETING_SUCCESS:
        draft.selectFanMeetingLoading = false;
        draft.selectFanMeetingDone = true;
        draft.applicant = action.data;
        break;
      case SELECT_FANMEETING_FAILURE:
        draft.selectFanMeetingLoading = false;
        draft.selectFanMeetingError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
