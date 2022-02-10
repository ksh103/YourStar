import produce from 'immer';
const initialState = {
  meetingApplyList: [], // 미팅 참여인원리스트
  meetingGameList: [], // 게임 리스트
  meetingsApplyLoading: false, // 팬미팅 신청 명단
  meetingsApplyDone: false,
  meetingsApplyError: null,

  meetingsGameResultLoading: false,
  meetingsGameResultDone: false,
  meetingsGameResultError: null,
};

export const MEETING_APPLY_REQUEST = 'MEETING_APPLY_REQUEST'; // 전체미팅
export const MEETING_APPLY_SUCCESS = 'MEETING_APPLY_SUCCESS';
export const MEETING_APPLY_FAILURE = 'MEETING_APPLY_FAILURE';

export const MEETING_GAME_RESULT_REQUEST = 'MEETING_GAME_RESULT_REQUEST'; // 미팅 게임정보
export const MEETING_GAME_RESULT_SUCCESS = 'MEETING_GAME_RESULT_SUCCESS';
export const MEETING_GAME_RESULT_FAILURE = 'MEETING_GAME_RESULT_FAILURE';

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
      case MEETING_GAME_RESULT_REQUEST:
        draft.meetingsGameResultLoading = true;
        draft.meetingsGameResultDone = false;
        draft.meetingsGameResultError = null;
        break;
      case MEETING_GAME_RESULT_SUCCESS:
        draft.meetingsGameResultLoading = false;
        draft.meetingsGameResultDone = true;
        draft.meetingGameList = action.data.list;
        break;
      case MEETING_GAME_RESULT_FAILURE:
        draft.meetingsGameResultLoading = false;
        draft.meetingsGameResultError = action.error;
        draft.meetingGameList = [];
        break;
      default:
        break;
    }
  });
export default reducer;
