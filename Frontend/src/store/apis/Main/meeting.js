import axios from 'axios';
import { BASE_URL } from '../../../utils/contants';

// 팬미팅 상세보기
export async function MeetingDetailAPI(meetingId) {
  const result = await axios.get(`${BASE_URL}meetings/${meetingId}`);
  return result;
}

// 팬미팅 전체보기
export async function MeetingAllListAPI({ page, size }) {
  const result = await axios.get(
    `${BASE_URL}meetings/room-applicant?page=1&size=10`
  );
  return result.data.meetings.content;
}

// 승인된 팬미팅 전체보기
export async function ApprovedMeetingListAPI({ page, size }) {
  const result = await axios.get(
    `${BASE_URL}meetings/room-applicant/approve?page=${page}&size=${size}`
  );
  return result.data.meetings.content;
}
// 예정된 팬미팅 전체보기
export async function UpcomingMeetingListAPI(page, size) {
  const result = await axios.get(
    `${BASE_URL}meetings/room-applicant/approve?page=${page}&size=${size}`
  );
  return result;
}

// 승인대기중인 팬미팅 전체보기
export async function PendingMeetingListAPI(page, size) {
  const result = await axios.get(
    `${BASE_URL}meetings/room-applicant/pending?page=${page}&size=${size}`
  );
  return result;
}

// 팬미팅 승인
export async function PendingMeetingAPI(meetingId) {
  const result = await axios.get(
    `${BASE_URL}meetings/room-applicant/pending/${meetingId}`
  );
  return result;
}

// 팬미팅에 참여한 팬의 경고 횟수 확인
export async function WarningCount(memberId, meetingId) {
  const result = await axios.get(
    `${BASE_URL}meetings/warning/${memberId}/${meetingId}`
  );
  return result;
}

// 팬미팅에 참여한 팬의 경고 주기
export async function WarningToMemberAPI(memberId, meetingId) {
  const result = await axios.put(
    `${BASE_URL}meetings/warning/${memberId}/${meetingId}`
  );
  return result;
}

// 스타가 팬미팅 신청
export async function InsertMeetingAPI({
  managerCode,
  meetingCnt,
  meetingDescription,
  meetingEndDate,
  meetingName,
  meetingOpenDate,
  meetingPrice,
  meetingStartDate,
}) {
  const result = await axios.post(`${BASE_URL}meeting/room-applicant`, {
    managerCode,
    meetingCnt,
    meetingDescription,
    meetingEndDate,
    meetingName,
    meetingOpenDate,
    meetingPrice,
    meetingStartDate,
  });
  return result;
}

// 스타가 팬미팅 수정
export async function UpdateMeetingAPI({
  meetingCnt,
  meetingDescription,
  meetingEndDate,
  meetingOpenDate,
  meetingPrice,
  meetingStartDate,
}) {
  const result = await axios.put(`${BASE_URL}meeting/room-application`, {
    meetingCnt,
    meetingDescription,
    meetingEndDate,
    meetingOpenDate,
    meetingPrice,
    meetingStartDate,
  });
  return result;
}

// 스타가 팬미팅 제거
export async function DeleteMeetingAPI(meetingId) {
  await axios.delete(`${BASE_URL}meeting/room-applicant/${meetingId}`);
}
