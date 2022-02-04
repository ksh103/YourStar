import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  MeetingAllListAPI,
  ApprovedMeetingListAPI,
  UpcomingMeetingListAPI,
  PendingMeetingAPI,
  WarningCount,
  WarningToMemberAPI,
  InsertMeetingAPI,
  UpdateMeetingAPI,
  DeleteMeetingAPI,
} from '../apis/Main/meeting';
import {
  TOTAL_MEETINGS_FAILURE,
  TOTAL_MEETINGS_REQUEST,
  TOTAL_MEETINGS_SUCCESS,
  APPROVED_MEETINGS_REQUEST,
  APPROVED_MEETINGS_SUCCESS,
  APPROVED_MEETINGS_FAILURE,
  UPCOMING_MEETINGS_REQUEST,
  UPCOMING_MEETINGS_SUCCESS,
  UPCOMING_MEETINGS_FAILURE,
  UPDATE_ISAPPROVE_REQUEST,
  UPDATE_ISAPPROVE_SUCCESS,
  UPDATE_ISAPPROVE_FAILURE,
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
function* upcomingMeetings(action) {
  try {
    const result = yield call(UpcomingMeetingListAPI, action.data);
    yield put({
      type: UPCOMING_MEETINGS_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: UPCOMING_MEETINGS_FAILURE,
    });
  }
}
function* updateIsApprove(action) {
  try {
    const result = yield call(PendingMeetingAPI, action.data);
    yield put({
      type: UPDATE_ISAPPROVE_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: UPDATE_ISAPPROVE_FAILURE,
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
      data: result,
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

function* watchTotalMeetings() {
  yield takeLatest(TOTAL_MEETINGS_REQUEST, totalMeetings);
}
function* watchAprovedMeetings() {
  yield takeLatest(APPROVED_MEETINGS_REQUEST, approvedMeetings);
}
function* watchUpcomingMeetings() {
  yield takeLatest(UPCOMING_MEETINGS_REQUEST, upcomingMeetings);
}
function* watchUpdateIsApprove() {
  yield takeLatest(UPDATE_ISAPPROVE_REQUEST, updateIsApprove);
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
    fork(watchTotalMeetings),
    fork(watchAprovedMeetings),
    fork(watchUpcomingMeetings),
    fork(watchUpdateIsApprove),
    fork(watchWarningMember),
    fork(watchInsertMeeting),
    fork(watchUpdateMeeting),
    fork(watchDeleteMeeting),
  ]);
}
