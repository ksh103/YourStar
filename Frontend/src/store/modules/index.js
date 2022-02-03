import { combineReducers } from 'redux';
import selectmode from './selectList';
import member from './member';
import faq from './faq';
import meeting from './meeting';
import mypage from './mypage';
export default combineReducers({ selectmode, member, meeting, faq, mypage });
