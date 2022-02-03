import { all, fork } from 'redux-saga/effects';
import faq from './faq';

export default function* rootSaga() {
  yield all([fork(faq)]);
}
