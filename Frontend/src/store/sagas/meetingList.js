import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  MeetingApplyListAPI,
  MeetingGameListAPI,
} from '../apis/Main/meetingList';
import {
  MEETING_APPLY_REQUEST,
  MEETING_APPLY_SUCCESS,
  MEETING_APPLY_FAILURE,
  MEETING_GAME_RESULT_REQUEST,
  MEETING_GAME_RESULT_SUCCESS,
  MEETING_GAME_RESULT_FAILURE,
} from '../modules/meetingList';

function* meetingGame(action) {
  try {
    const result = yield call(MeetingGameListAPI, action.data);
    yield put({
      type: MEETING_GAME_RESULT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: MEETING_GAME_RESULT_FAILURE,
    });
  }
}

function* watchMeetingGame() {
  yield takeLatest(MEETING_GAME_RESULT_REQUEST, meetingGame);
}

function* meetingApply(action) {
  try {
    const result = yield call(MeetingApplyListAPI, action.data);
    console.log(result);
    yield put({
      type: MEETING_APPLY_SUCCESS,
      data: result.data.content,
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
  yield all([fork(watchMeetingApply), fork(watchMeetingGame)]);
}
