import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { CreateOfficialsAPI } from '../apis/Main/admin';
import {
  CREATE_MANAGER_REQUEST,
  CREATE_MANAGER_SUCCESS,
  CREATE_MANAGER_FAILURE,
} from '../modules/admin';

function* loadCreateAccount(action) {
  try {
    const result = yield call(CreateOfficialsAPI, action.data);
    alert('계정 생성이 완료되었습니다.');
    yield put({
      type: CREATE_MANAGER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CREATE_MANAGER_FAILURE,
    });
  }
}

function* watchLoadCreateAccount() {
  yield takeLatest(CREATE_MANAGER_REQUEST, loadCreateAccount);
}

export default function* adminSaga() {
  yield all([fork(watchLoadCreateAccount)]);
}
