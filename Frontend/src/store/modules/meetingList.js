import produce from 'immer';
const initialState = {
  meetingApplyList: [],

  meetingsApplyLoading: false, // 팬미팅 신청 명단
  meetingsApplyDone: false,
  meetingsApplyError: null,
};

export const MEETING_APPLY_REQUEST = 'MEETING_APPLY_REQUEST'; // 전체미팅
export const MEETING_APPLY_SUCCESS = 'MEETING_APPLY_SUCCESS';
export const MEETING_APPLY_FAILURE = 'MEETING_APPLY_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MEETING_APPLY_REQUEST:
        draft.meetingsApplyLoading = true;
        draft.meetingsApplyDone = false;
        draft.meetingsApplyError = null;
        break;
      case MEETING_APPLY_SUCCESS:
        draft.meetingsApplyLoading = false;
        draft.meetingsApplyDone = true;
        draft.meetingApplyList = action.data.data.content;
        break;
      case MEETING_APPLY_FAILURE:
        draft.meetingsApplyLoading = false;
        draft.meetingsApplyError = action.error;
        break;
      default:
        break;
    }
  });
export default reducer;
