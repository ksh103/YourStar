import axios from 'axios';
import { BASE_URL } from '../../../utils/contants';

// 팬미팅 신청 명단
export async function MeetingApplyListAPI(data) {
  const result = await axios.get(
    `${BASE_URL}meetings/fan-applicant/list/${data.meetingId}?page=1&size=100`
  );
  return result;
}

export async function MeetingGameListAPI({ meetingId }) {
  const result = await axios.get(
    `${BASE_URL}meetings/game-result/admin/${meetingId}`
  );
  return result;
}
