import axios from 'axios';

// 스타가 팬미팅 신청
export async function axiosStarMeetingApply(
  managerCode,
  meetingCnt,
  meetingDescription,
  meetingEndDate,
  meetingName,
  meetingOpenDate,
  meetingPrice,
  meetingStartDate
) {
  try {
    const response = await axios.post(
      'https://i6e204.p.ssafy.io/api/meetings/room-applicant',
      {
        managerCode: managerCode,
        meetingCnt: meetingCnt,
        meetingDescription: meetingDescription,
        meetingEndDate: meetingEndDate,
        meetingName: meetingName,
        meetingOpenDate: meetingOpenDate,
        meetingPrice: meetingPrice,
        meetingStartDate: meetingStartDate,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 스타가 팬미팅 수정
export async function axiosStarMeetingModify(
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
  try {
    const response = await axios.put(
      'https://i6e204.p.ssafy.io/api/meetings/room-applicant',
      {
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
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 스타가 신청한 팬미팅 취소
export async function axiosStarMeetingDelete(meetingId) {
  try {
    const response = await axios.delete(
      `https://i6e204.p.ssafy.io/api/meetings/room-applicant/${meetingId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
