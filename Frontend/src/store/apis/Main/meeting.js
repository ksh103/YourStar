import axios from 'axios';
import { BASE_URL } from '../../../utils/contants';

// 팬미팅 상세보기
export async function MeetingDetailAPI({ meetingId, memberId }) {
  const result = await axios
    .get(`${BASE_URL}meetings/${meetingId}`)
    .then(res => res.data.meeting);

  const applicant = await axios
    .get(`${BASE_URL}meetings/fan-applicant/list/${meetingId}?page=1&size=100`)
    .then(res => res.data.content);
  const applicantCnt = applicant.length;
  const isReserve = applicant.some(a => a.memberId === memberId);
  return {
    id: result.meetingId,
    code: result.managerCode,
    codeName: result.managerGroup.managerCodeName,
    name: result.meetingName,
    openDate: result.meetingOpenDate,
    startDate: result.meetingStartDate,
    endDate: result.meetingEndDate,
    cnt: result.meetingCnt,
    price: result.meetingPrice,
    description: result.meetingDescription,
    image: result.meetingImgPath !== null ? result.meetingImgPath.fileId : null,
    approve: result.approve,
    applicantCnt,
    isReserve,
  };
}

// 팬미팅 전체보기
export async function MeetingAllListAPI({ page, size }) {
  const result = await axios
    .get(`${BASE_URL}meetings/room-applicant?page=1&size=100`)
    .then(res => res.data.meetings.content);
  return result.map(data => {
    return {
      id: data.meetingId,
      code: data.managerCode,
      name: data.meetingName,
      startDate: data.meetingStartDate,
      endDate: data.meetingEndDate,
      approve: data.approve,
      image: data.meetingImgPath !== null ? data.meetingImgPath.fileId : null,
    };
  });
}

// 승인된 팬미팅 전체보기
export async function ApprovedMeetingListAPI({ page, size }) {
  const result = await axios
    .get(`${BASE_URL}meetings/room-applicant/approve?page=${page}&size=${size}`)
    .then(res => res.data.meetings.content);
  return result.map(data => {
    return {
      id: data.meetingId,
      code: data.managerCode,
      name: data.meetingName,
      startDate: data.meetingStartDate,
      endDate: data.meetingEndDate,
      approve: data.approve,
      image: data.meetingImgPath,
    };
  });
}

// 승인대기중인 팬미팅 전체보기
export async function PendingMeetingListAPI(page, size) {
  const result = await axios.get(
    `${BASE_URL}meetings/room-applicant/pending?page=${page}&size=${size}`
  );
  return result;
}

// 팬미팅 승인
export async function PendingMeetingAPI(meeting) {
  await axios
    .get(`${BASE_URL}meetings/room-applicant/pending/${meeting.id}`)
    .then(res => console.log(res));
  return {
    id: meeting.id,
    code: meeting.code,
    name: meeting.name,
    startDate: meeting.startDate,
    endDate: meeting.endDate,
    approve: true,
    image: meeting.image,
  };
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
  code,
  name,
  price,
  cnt,
  description,
  openDate,
  startDate,
  endDate,
  image,
}) {
  const form = new FormData();
  form.append(
    'meetingApply',
    new Blob(
      [
        JSON.stringify({
          managerCode: code,
          meetingCnt: cnt,
          meetingDescription: description,
          meetingEndDate: endDate,
          meetingName: name,
          meetingOpenDate: openDate,
          meetingPrice: price,
          meetingStartDate: startDate,
        }),
      ],
      { type: 'application/json' }
    )
  );
  form.append('file', image);
  axios.post(`${BASE_URL}meetings/room-applicant`, form, {
    headers: {
      'Content-Type': `multipart/form-data`,
    },
  });
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
