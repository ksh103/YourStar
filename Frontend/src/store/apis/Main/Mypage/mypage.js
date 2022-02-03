import axios from 'axios';

// 자신의 정보 조회
// !!!!!!!!header에 토큰 정보 담아줘야함!!!!!!!!!!!!!!
export async function axiosMypage() {
  try {
    const response = await axios.get('https://i6e204.p.ssafy.io/api/members');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 회원정보 수정
export async function axiosMemberModify(
  memberId,
  memberAddress,
  memberNick,
  memberPassword,
  memberPhone
) {
  try {
    const response = await axios.put(
      `https://i6e204.p.ssafy.io/api/members/${memberId}`,
      {
        memberAddress: memberAddress,
        memberNick: memberNick,
        memberPassword: memberPassword,
        memberPhone: memberPhone,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 회원정보 탈퇴
export async function axiosMemberDelete(memberId) {
  try {
    const response = await axios.delete(
      `https://i6e204.p.ssafy.io/api/members/${memberId}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
