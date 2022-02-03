import axios from 'axios';

// 가입 회원 정보 확인
//!!!!!!!!!!!!!!header에 관리자 토큰 담아서 보내줘야함 그래야 정보가 나옴!!!!!!
export async function axiosMemberAllList(page, size) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/admin?page=${page}&size=${size}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 관계자 계정 생성
export async function axiosCreateOfficials(accountCnt, managerCodeName) {
  try {
    const response = await axios.post('https://i6e204.p.ssafy.io/api/admin', {
      accountCnt: accountCnt,
      managerCodeName: managerCodeName,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
