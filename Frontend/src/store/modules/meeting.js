import produce from 'immer';
const initialState = {
  meeting: {},
  totalMeetings: [],
  approvedMeetings: [],

  detailMeetingLoading: false, // 미팅 상세정보
  detailMeetingDone: false,
  detailMeetingError: null,
  totalMeetingsLoading: false, // 전체 미팅일정
  totalMeetingsDone: false,
  totalMeetingsError: null,
  approvedMeetingsLoading: false, // 승인된 미팅일정
  approvedMeetingsDone: false,
  approvedMeetingsError: null,
  updateIsApproveLoading: false, // 팬미팅 승인 업데이트
  updateIsApproveDone: false,
  updateIsApproveError: null,
  warningMemberLoading: false, // 회원에서 경고주기
  warningMemberDone: false,
  warningMemberError: null,
  insertMeetingLoading: false, // 미팅신청
  insertMeetingDone: false,
  insertMeetingError: null,
  updateMeetingLoading: false, // 미팅수정
  updateMeetingDone: false,
  updateMeetingError: null,
  deleteMeetingLoading: false, // 미팅 삭제
  deleteMeetingDone: false,
  deleteMeetingError: null,
};

export const DETAIL_MEETING_REQUEST = 'DETAIL_MEETING_REQUEST'; // 상세정보 미팅
export const DETAIL_MEETING_SUCCESS = 'DETAIL_MEETING_SUCCESS';
export const DETAIL_MEETING_FAILURE = 'DETAIL_MEETING_FAILURE';

export const TOTAL_MEETINGS_REQUEST = 'TOTAL_MEETINGS_REQUEST'; // 전체미팅
export const TOTAL_MEETINGS_SUCCESS = 'TOTAL_MEETINGS_SUCCESS';
export const TOTAL_MEETINGS_FAILURE = 'TOTAL_MEETINGS_FAILURE';

export const APPROVED_MEETINGS_REQUEST = 'APPROVED_MEETINGS_REQUEST'; //  승인된 미팅
export const APPROVED_MEETINGS_SUCCESS = 'APPROVED_MEETINGS_SUCCESS';
export const APPROVED_MEETINGS_FAILURE = 'APPROVED_MEETINGS_FAILURE';

export const UPDATE_ISAPPROVE_REQUEST = 'UPDATE_ISAPPROVE_REQUEST'; // 팬미팅 승인하기
export const UPDATE_ISAPPROVE_SUCCESS = 'UPDATE_ISAPPROVE_SUCCESS';
export const UPDATE_ISAPPROVE_FAILURE = 'UPDATE_ISAPPROVE_FAILURE';

export const WARNING_MEMBER_REQUEST = 'WARNING_MEMBER_REQUEST'; // 팬에게 경고주기
export const WARNING_MEMBER_SUCCESS = 'WARNING_MEMBER_SUCCESS';
export const WARNING_MEMBER_FAILURE = 'WARNING_MEMBER_FAILURE';

export const INSERT_MEETING_REQUEST = 'INSERT_MEETING_REQUEST'; // 미팅 신청(스타)
export const INSERT_MEETING_SUCCESS = 'INSERT_MEETING_SUCCESS';
export const INSERT_MEETING_FAILURE = 'INSERT_MEETING_FAILURE';

export const UPDATE_MEETING_REQUEST = 'UPDATE_MEETING_REQUEST'; // 미팅 수정(스타)
export const UPDATE_MEETING_SUCCESS = 'UPDATE_MEETING_SUCCESS';
export const UPDATE_MEETING_FAILURE = 'UPDATE_MEETING_FAILURE';

export const DELETE_MEETING_REQUEST = 'DELETE_MEETING_REQUEST'; // 미팅 취소(스타)
export const DELETE_MEETING_SUCCESS = 'DELETE_MEETING_SUCCESS';
export const DELETE_MEETING_FAILURE = 'DELETE_MEETING_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DETAIL_MEETING_REQUEST:
        draft.detailMeetingLoading = true;
        draft.detailMeetingDone = false;
        draft.detailMeetingError = null;
        break;
      case DETAIL_MEETING_SUCCESS:
        draft.detailMeetingLoading = false;
        draft.detailMeetingDone = true;
        draft.meeting = action.data;
        break;
      case DETAIL_MEETING_FAILURE:
        draft.detailMeetingLoading = false;
        draft.detailMeetingError = action.error;
        break;
      case TOTAL_MEETINGS_REQUEST:
        draft.totalMeetingsLoading = true;
        draft.totalMeetingsDone = false;
        draft.totalMeetingsError = null;
        break;
      case TOTAL_MEETINGS_SUCCESS:
        draft.totalMeetingsLoading = false;
        draft.totalMeetingsDone = true;
        draft.totalMeetings = action.data;
        break;
      case TOTAL_MEETINGS_FAILURE:
        draft.totalMeetingsLoading = false;
        draft.totalMeetingsError = action.error;
        break;
      case APPROVED_MEETINGS_REQUEST:
        draft.approvedMeetingsLoading = true;
        draft.approvedMeetingsDone = false;
        draft.approvedMeetingsError = null;
        break;
      case APPROVED_MEETINGS_SUCCESS:
        draft.approvedMeetingsLoading = false;
        draft.approvedMeetingsDone = true;
        draft.approvedMeetings = action.data;
        break;
      case APPROVED_MEETINGS_FAILURE:
        draft.approvedMeetingsLoading = false;
        draft.approvedMeetingsError = action.error;
        break;
      case INSERT_MEETING_REQUEST:
        draft.insertMeetingLoading = true;
        draft.insertMeetingDone = false;
        draft.insertMeetingError = null;
        break;
      case INSERT_MEETING_SUCCESS:
        draft.insertMeetingLoading = false;
        draft.insertMeetingDone = true;
        draft.totalMeetings.push(action.data);
        break;
      case INSERT_MEETING_FAILURE:
        draft.insertMeetingLoading = false;
        draft.insertMeetingError = action.error;
        break;
      case UPDATE_MEETING_REQUEST:
        draft.updateMeetingLoading = true;
        draft.updateMeetingDone = false;
        draft.updateMeetingError = null;
        break;
      case UPDATE_MEETING_SUCCESS:
        draft.updateMeetingLoading = false;
        draft.updateMeetingDone = true;
        let idx = draft.totalMeetings.findIndex(
          m => m.meetingId === action.data.meetingId
        );
        draft.totalMeetings[idx] = action.data;
        idx = draft.approvedMeetings.findIndex(
          m => m.meetingId === action.data.meetingId
        );
        draft.approvedMeetings[idx] = action.data;
        idx = draft.upcomingMeetings.findIndex(
          m => m.meetingId === action.data.meetingId
        );
        draft.upcomingMeetings[idx] = action.data;
        break;
      case UPDATE_MEETING_FAILURE:
        draft.updateMeetingLoading = false;
        draft.updateMeetingError = action.error;
        break;
      case DELETE_MEETING_REQUEST:
        draft.deleteMeetingLoading = true;
        draft.deleteMeetingDone = false;
        draft.deleteMeetingError = null;
        break;
      case DELETE_MEETING_SUCCESS:
        draft.deleteMeetingLoading = false;
        draft.deleteMeetingDone = true;
        draft.totalMeetings.filter(m => m.meetingId !== action.data.meetingId);
        draft.approvedMeetings.filter(
          m => m.meetingId !== action.data.meetingId
        );
        draft.upcomingMeetings.filter(
          m => m.meetingId !== action.data.meetingId
        );
        break;
      case DELETE_MEETING_FAILURE:
        draft.deleteMeetingLoading = false;
        draft.deleteMeetingError = action.error;
        break;
      default:
        break;
    }
  });
export default reducer;
