import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { FaqListAPI } from '../apis/Main/faq';
import {
  LOAD_FAQS_REQUEST,
  LOAD_FAQS_SUCCESS,
  LOAD_FAQS_FAILURE,
} from '../modules/faq';

function* loadFaqs(action) {
  try {
    const result = yield call(FaqListAPI, action.data);
    yield put({
      type: LOAD_FAQS_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOAD_FAQS_FAILURE,
    });
  }
}

function* watchLoadFaqs() {
  yield takeLatest(LOAD_FAQS_REQUEST, loadFaqs);
}

export default function* faqSaga() {
  yield all([fork(watchLoadFaqs)]);
}
