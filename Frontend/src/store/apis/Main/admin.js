import axios from 'axios';
import BASE_URL from '../../../utils/contants';

// 가입 회원 정보 확인
// !!!!!!!!!!!!!!header에 관리자 토큰 담아서 보내줘야함 그래야 정보가 나옴!!!!!!
export async function MemberAllListAPI(page, size) {
  const result = await axios.get(`${BASE_URL}admin?page=${page}&size=${size}`, {
    headers: '',
  });
  return result;
}

// 관계자 계정 생성
export async function CreateOfficialsAPI(accountCnt, managerCodeName) {
  const result = await axios.post(`${BASE_URL}admin`, {
    accountCnt: accountCnt,
    managerCodeName: managerCodeName,
  });
  return result;
}
