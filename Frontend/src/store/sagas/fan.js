import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  FanApplicantAPI,
  CancelFanApplicantAPI,
  FanApplicantListAPI,
} from '../apis/Main/fan-applicant';
import {
  INSERT_FANMEETING_REQUEST,
  INSERT_FANMEETING_SUCCESS,
  INSERT_FANMEETING_FAILURE,
  SELECT_FANMEETING_REQUEST,
  SELECT_FANMEETING_SUCCESS,
  SELECT_FANMEETING_FAILURE,
  DELETE_FANMEETING_REQUEST,
  DELETE_FANMEETING_SUCCESS,
  DELETE_FANMEETING_FAILURE,
} from '../modules/fan';
import {
  ADD_APPLICANT_MEMBER,
  DETAIL_MEETING_REQUEST,
  REMOVE_APPLICANT_MEMBER,
} from '../modules/meeting';

function* insertFanMeeting(action) {
  try {
    console.log(action);
    const result = yield call(FanApplicantAPI, action.data);
    yield put({
      type: DETAIL_MEETING_REQUEST,
      data: action.data,
    });
    yield put({
      type: INSERT_FANMEETING_SUCCESS,
    });
    yield put({
      type: ADD_APPLICANT_MEMBER,
    });
  } catch (err) {
    yield put({
      type: INSERT_FANMEETING_FAILURE,
    });
  }
}
function* selectFanMeeting(action) {
  try {
    const result = yield call(FanApplicantListAPI, action.data);
    yield put({
      type: SELECT_FANMEETING_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: SELECT_FANMEETING_FAILURE,
    });
  }
}
function* deleteFanMeeting(action) {
  try {
    const result = yield call(CancelFanApplicantAPI, action.data);
    yield put({
      type: DELETE_FANMEETING_SUCCESS,
      data: result,
    });
    yield put({
      type: REMOVE_APPLICANT_MEMBER,
    });
  } catch (err) {
    yield put({
      type: DELETE_FANMEETING_FAILURE,
    });
  }
}

function* watchInsertFanMeeting() {
  yield takeLatest(INSERT_FANMEETING_REQUEST, insertFanMeeting);
}
function* watchSelectFanMeeting() {
  yield takeLatest(SELECT_FANMEETING_REQUEST, selectFanMeeting);
}
function* watchDeleteFanMeeting() {
  yield takeLatest(DELETE_FANMEETING_REQUEST, deleteFanMeeting);
}

export default function* meetingSaga() {
  yield all([
    fork(watchInsertFanMeeting),
    fork(watchSelectFanMeeting),
    fork(watchDeleteFanMeeting),
  ]);
}
