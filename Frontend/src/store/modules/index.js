import { combineReducers } from 'redux';
import selectmode from './selectList';
import member from './member';
import faq from './faq';
import meetingList from './meetingList';
import meeting from './meeting';
import mypage from './mypage';
import MeetingRoom from './meetingRoom';
import fan from './fan';
export default combineReducers({
  selectmode,
  member,
  meeting,
  faq,
  mypage,
  MeetingRoom,
  meetingList,
  fan,
});
