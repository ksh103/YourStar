import axios from 'axios';

// 팬이 팬미팅 신청
export async function axiosFanApplicant(meetingId, memberId) {
  try {
    const response = await axios.post(
      'https://i6e204.p.ssafy.io/api/meetings/fan-applicant',
      {
        meetingId: meetingId,
        memberId: memberId,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 팬이 신청한 팬미팅 내역 확인
export async function axiosFanApplicantList(memberId) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/meetings/fan-applicant/${memberId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 팬이 신청한 팬미팅 취소
export async function axiosCancelFanApplicant(meetingId, memberId) {
  try {
    const response = await axios.delete(
      `https://i6e204.p.ssafy.io/api/meetings/fan-applicant/${memberId}/${meetingId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
