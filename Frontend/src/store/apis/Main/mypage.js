import axios from 'axios';
import { BASE_URL } from '../../../utils/contants';

// 자신의 정보 조회
// !!!!!!!!header에 토큰 정보 담아줘야함!!!!!!!!!!!!!!
export async function MypageAPI() {
  console.log(sessionStorage.getItem('userToken'));
  const result = await axios.get(`${BASE_URL}members`, {
    headers: {
      Authorization: sessionStorage.getItem('userToken'),
    },
  });
  return result.data;
}
// 회원정보 수정
export async function MemberModifyAPI({
  memberId, // 인덱스 번호
  memberAddress,
  memberNick,
  memberPassword,
  memberPhone,
}) {
  const result = await axios.put(
    `${BASE_URL}members/${memberId}`,
    {
      memberAddress: memberAddress,
      memberNick: memberNick,
      memberPassword: memberPassword,
      memberPhone: memberPhone,
    }
    // {
    //   headers: { Authorization: localStorage.getItem('userToken') },
    // }
  );
  return result;
}

// 회원정보 탈퇴
export async function MemberDeleteAPI({ memberId }) {
  const result = await axios.delete(
    `${BASE_URL}members/${memberId}`
    //  {
    //   headers: { Authorization: localStorage.getItem('userToken') },
    // }
  );
  return result;
}
