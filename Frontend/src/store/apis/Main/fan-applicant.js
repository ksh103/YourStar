import { List } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from '../../../utils/contants';

// 팬이 팬미팅 신청
export async function FanApplicantAPI({ meetingId, memberId }) {
  console.log(meetingId, memberId);
  const result = await axios.post(`${BASE_URL}meetings/fan-applicant`, {
    meetingId: meetingId,
    memberId: memberId,
  });
  return result;
}

// 팬이 신청한 팬미팅 내역 확인
export async function FanApplicantListAPI({ memberId, page, size }) {
  const result = await axios
    .get(
      `${BASE_URL}meetings/fan-applicant/${memberId}?page=${page}&size=${size}`
    )
    .then(result => result.data.content);
  return result.map(m => {
    return {
      meetingId: m.meetingId,
      managerCode: m.managerCode,
      meetingName: m.meetingName,
      meetingOpenDate: m.meetingOpenDate,
      meetingStartDate: m.meetingStartDate,
      meetingEndDate: m.meetingEndDate,
      image: m.meetingImgPath === null ? null : m.meetingImgPath.fileId,
    };
  });
}

// 팬이 신청한 팬미팅 취소
export async function CancelFanApplicantAPI({ meetingId, memberId }) {
  const result = await axios.delete(
    `${BASE_URL}meetings/fan-applicant/${memberId}/${meetingId}`
  );
  return result;
}
