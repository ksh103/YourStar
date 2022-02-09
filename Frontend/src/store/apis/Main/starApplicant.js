import axios from 'axios';
import { BASE_URL } from '../../../utils/contants';

// 스타가 팬미팅 신청
export async function StarMeetingApplyAPI(
  managerCode,
  meetingCnt,
  meetingDescription,
  meetingEndDate,
  meetingName,
  meetingOpenDate,
  meetingPrice,
  meetingStartDate
) {
  const result = await axios.post(`${BASE_URL}meetings/room-applicant`, {
    managerCode: managerCode,
    meetingCnt: meetingCnt,
    meetingDescription: meetingDescription,
    meetingEndDate: meetingEndDate,
    meetingName: meetingName,
    meetingOpenDate: meetingOpenDate,
    meetingPrice: meetingPrice,
    meetingStartDate: meetingStartDate,
  });
  return result;
}

// 스타가 팬미팅 수정
export async function StarMeetingModifyAPI(
  approve,
  managerCode,
  meetingCnt,
  meetingDescription,
  meetingEndDate,
  meetingId,
  meetingName,
  meetingOpenDate,
  meetingPrice,
  meetingStartDate
) {
  const result = await axios.put(`${BASE_URL}meetings/room-applicant`, {
    approve: approve,
    managerCode: managerCode,
    meetingCnt: meetingCnt,
    meetingDescription: meetingDescription,
    meetingEndDate: meetingEndDate,
    meetingId: meetingId,
    meetingName: meetingName,
    meetingOpenDate: meetingOpenDate,
    meetingPrice: meetingPrice,
    meetingStartDate: meetingStartDate,
  });
  return result;
}

// 스타가 신청한 팬미팅 취소
export async function StarMeetingDeleteAPI(meetingId) {
  const result = await axios.delete(
    `${BASE_URL}meetings/room-applicant/${meetingId}`
  );
  return result;
}
