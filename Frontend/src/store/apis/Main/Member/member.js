import axios from 'axios';

// 로그인
export async function axiosLogin(id, pw) {
  try {
    // console.log(id + ' ' + pw);
    const response = await axios.post(
      'https://i6e204.p.ssafy.io/api/members/login',
      {
        memberEmail: id,
        memberPassword: pw,
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

// 로그아웃
export async function axiosLogout(index) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/members/logout/${index}`
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 회원가입
export async function axiosSignup({
  email,
  name,
  phoneNumber,
  password,
  nickName,
  address,
  birth,
  gender,
}) {
  try {
    const response = await axios.post(
      'https://i6e204.p.ssafy.io/api/members/register',
      {
        memberAddress: address,
        memberBirth: birth,
        memberEmail: email,
        memberGender: gender,
        memberName: name,
        memberNick: nickName,
        memberPassword: password,
        memberPhone: phoneNumber,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 이메일 중복체크
export async function axiosEmailCheck(email) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/members/email-check/${email}`
    );
    console.log('사용할 수 있는 이메일 입니다.');
    console.log(response);
  } catch (error) {
    console.log(error);
    console.log('사용할 수 없는 이메일 입니다.');
  }
}

// 비밀번호 초기화
export async function axiosResetPassword(email, name) {
  try {
    const response = await axios.post('https://i6e204.p.ssafy.io/api/members', {
      memberEmail: email,
      memberName: name,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// 닉네임 중복체크
export async function axiosNickNameCheck(nickName) {
  try {
    const response = await axios.get(
      `https://i6e204.p.ssafy.io/api/members/nick-check/${nickName}`
    );
    console.log('사용할 수 있는 닉네임 입니다.');
    console.log(response);
  } catch (error) {
    console.log(error);
    console.log('사용할 수 없는 닉네임 입니다.');
  }
}
