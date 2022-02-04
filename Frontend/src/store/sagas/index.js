import { all, fork } from 'redux-saga/effects';
import faq from './faq';
import mypage from './mypage';
import meeting from './meeting';
import member from './member';

export default function* rootSaga() {
  yield all([fork(faq), fork(mypage), fork(meeting), fork(member)]);
}
