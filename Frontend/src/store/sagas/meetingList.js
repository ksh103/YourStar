import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { MeetingApplyListAPI } from '../apis/Main/meetingList';
import {
  MEETING_APPLY_REQUEST,
  MEETING_APPLY_SUCCESS,
  MEETING_APPLY_FAILURE,
} from '../modules/meetingList';

function* meetingApply(action) {
  try {
    const result = yield call(MeetingApplyListAPI, action.data);
    yield put({
      type: MEETING_APPLY_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: MEETING_APPLY_FAILURE,
    });
  }
}

function* watchMeetingApply() {
  yield takeLatest(MEETING_APPLY_REQUEST, meetingApply);
}
export default function* meetingSaga() {
  yield all([fork(watchMeetingApply)]);
}
