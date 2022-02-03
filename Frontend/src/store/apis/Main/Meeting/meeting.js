import axios from 'axios';

// 팬미팅 상세보기
export async function axiosMeetingDetail(meetingId) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/meetings/${meetingId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 팬미팅 전체보기
export async function axiosMeetingAllList(page, size) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/meetings/room-applicant?page=${page}&size=${size}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 승인된 팬미팅 전체보기
export async function axiosApprovedMeetingList(page, size) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/meetings/room-applicant/approve?page=${page}&size=${size}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 승인대기중인 팬미팅 전체보기
export async function axiosPendingMeetingList(page, size) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/meetings/room-applicant/pending?page=${page}&size=${size}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 팬미팅 승인
export async function axiosPendingMeeting(meetingId) {
  try {
    const response = await axios.get(
      `http://i6e204.p.ssafy.io:8080/api/meetings/room-applicant/pending/${meetingId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 팬미팅에 참여한 팬의 경고 횟수 확인
export async function axiosWarningCount(memberId, meetingId) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/meetings/warning/${memberId}/${meetingId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 팬미팅에 참여한 팬의 경고 주기
export async function axiosWarningToMember(memberId, meetingId) {
  try {
    const response = await axios.put(
      `https://i6e204.p.ssafy.io/api/meetings/warning/${memberId}/${meetingId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
