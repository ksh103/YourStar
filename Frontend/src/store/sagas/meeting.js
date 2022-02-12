import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  MeetingDetailAPI,
  MeetingAllListAPI,
  ApprovedMeetingListAPI,
  PendingMeetingAPI,
  WarningCountAPI,
  WarningToMemberAPI,
  InsertMeetingAPI,
  UpdateMeetingAPI,
  DeleteMeetingAPI,
} from '../apis/Main/meeting';
import {
  DETAIL_MEETING_FAILURE,
  DETAIL_MEETING_REQUEST,
  DETAIL_MEETING_SUCCESS,
  TOTAL_MEETINGS_FAILURE,
  TOTAL_MEETINGS_REQUEST,
  TOTAL_MEETINGS_SUCCESS,
  APPROVED_MEETINGS_REQUEST,
  APPROVED_MEETINGS_SUCCESS,
  APPROVED_MEETINGS_FAILURE,
  UPDATE_APPROVE_REQUEST,
  UPDATE_APPROVE_SUCCESS,
  UPDATE_APPROVE_FAILURE,
  WARNING_COUNT_REQUEST,
  WARNING_COUNT_SUCCESS,
  WARNING_COUNT_FAILURE,
  WARNING_MEMBER_REQUEST,
  WARNING_MEMBER_SUCCESS,
  WARNING_MEMBER_FAILURE,
  INSERT_MEETING_REQUEST,
  INSERT_MEETING_SUCCESS,
  INSERT_MEETING_FAILURE,
  UPDATE_MEETING_REQUEST,
  UPDATE_MEETING_SUCCESS,
  UPDATE_MEETING_FAILURE,
  DELETE_MEETING_REQUEST,
  DELETE_MEETING_SUCCESS,
  DELETE_MEETING_FAILURE,
} from '../modules/meeting';
import swal from 'sweetalert';
function* detailMeeting(action) {
  try {
    const result = yield call(MeetingDetailAPI, action.data);
    yield put({
      type: DETAIL_MEETING_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: DETAIL_MEETING_FAILURE,
    });
  }
}
function* totalMeetings(action) {
  try {
    const result = yield call(MeetingAllListAPI, action.data);
    yield put({
      type: TOTAL_MEETINGS_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: TOTAL_MEETINGS_FAILURE,
    });
  }
}
function* approvedMeetings(action) {
  try {
    const result = yield call(ApprovedMeetingListAPI, action.data);
    yield put({
      type: APPROVED_MEETINGS_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: APPROVED_MEETINGS_FAILURE,
    });
  }
}
function* updateApprove(action) {
  try {
    const result = yield call(PendingMeetingAPI, action.data);
    yield put({
      type: UPDATE_APPROVE_SUCCESS,
      data: result,
    });
    swal('', '미팅이 등록 되었습니다.', 'success', {
      buttons: false,
      timer: 1800,
    });
  } catch (err) {
    yield put({
      type: UPDATE_APPROVE_FAILURE,
    });
  }
}
function* warningCount(action) {
  try {
    const result = yield call(WarningCountAPI, action.data);
    yield put({
      type: WARNING_COUNT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: WARNING_COUNT_FAILURE,
    });
  }
}

function* warningMember(action) {
  try {
    const result = yield call(WarningToMemberAPI, action.data);
    yield put({
      type: WARNING_MEMBER_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: WARNING_MEMBER_FAILURE,
    });
  }
}

function* insertMeeting(action) {
  try {
    const result = yield call(InsertMeetingAPI, action.data);
    yield put({
      type: INSERT_MEETING_SUCCESS,
    });
    swal(
      '미팅 신청 성공',
      '미팅 신청이 완료되었습니다. 승인을 기다려주세요.',
      'success',
      {
        buttons: false,
        timer: 1800,
      }
    );
    yield put({
      type: TOTAL_MEETINGS_REQUEST,
      data: { page: 1, size: 100 },
    });
  } catch (err) {
    yield put({
      type: INSERT_MEETING_FAILURE,
    });
  }
}
function* updateMeeting(action) {
  try {
    const result = yield call(UpdateMeetingAPI, action.data);
    yield put({
      type: UPDATE_MEETING_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: UPDATE_MEETING_FAILURE,
    });
  }
}
function* deleteMeeting(action) {
  try {
    const result = yield call(DeleteMeetingAPI, action.data);
    yield put({
      type: DELETE_MEETING_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: DELETE_MEETING_FAILURE,
    });
  }
}

function* watchDetailMeeting() {
  yield takeLatest(DETAIL_MEETING_REQUEST, detailMeeting);
}
function* watchTotalMeetings() {
  yield takeLatest(TOTAL_MEETINGS_REQUEST, totalMeetings);
}
function* watchAprovedMeetings() {
  yield takeLatest(APPROVED_MEETINGS_REQUEST, approvedMeetings);
}
function* watchUpdateApprove() {
  yield takeLatest(UPDATE_APPROVE_REQUEST, updateApprove);
}
function* watchWarningCount() {
  yield takeLatest(WARNING_COUNT_REQUEST, warningCount);
}
function* watchWarningMember() {
  yield takeLatest(WARNING_MEMBER_REQUEST, warningMember);
}
function* watchInsertMeeting() {
  yield takeLatest(INSERT_MEETING_REQUEST, insertMeeting);
}
function* watchUpdateMeeting() {
  yield takeLatest(UPDATE_MEETING_REQUEST, updateMeeting);
}
function* watchDeleteMeeting() {
  yield takeLatest(DELETE_MEETING_REQUEST, deleteMeeting);
}

export default function* meetingSaga() {
  yield all([
    fork(watchDetailMeeting),
    fork(watchTotalMeetings),
    fork(watchAprovedMeetings),
    fork(watchUpdateApprove),
    fork(watchWarningCount),
    fork(watchWarningMember),
    fork(watchInsertMeeting),
    fork(watchUpdateMeeting),
    fork(watchDeleteMeeting),
  ]);
}
