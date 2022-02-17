import React, { useState } from 'react';
import { Layout, Wrapper } from '../../../styles/variables';
import dayjs from 'dayjs';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import {
  SignupBlock,
  SignupContent,
  SignupContentRow,
  SignupHeader,
} from './Signup.style';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useDispatch, useSelector } from 'react-redux';
import {
  EMAIL_CHECK_REQUEST,
  NICK_CHECK_REQUEST,
  setAddressButton,
  SIGN_UP_REQUEST,
} from '../../../store/modules/member';
import SearchAddrModal from '../../utils/modal/modalSearchAddr';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickName, setNickName] = useState('');
  const [gender, setGender] = useState('');
  const { addressButton, address, emailCheckDone, nickCheckDone, signUpDone } =
    useSelector(state => state.member);

  // 주소 검색 버튼
  const addrButton = () => {
    dispatch(setAddressButton(true)); // redux 주소창 open
  };

  // Handler function
  const onEmailHandler = e => {
    setEmail(e.target.value);
  };
  const onNameHandler = e => {
    setName(e.target.value);
  };
  const onPhoneNumberHandler = e => {
    setPhoneNumber(e.target.value);
  };
  const onPasswordHandler = e => {
    setPassword(e.target.value);
  };
  const onPasswordCheckHandler = e => {
    setPasswordCheck(e.target.value);
  };
  const onNickNameHandler = e => {
    setNickName(e.target.value);
  };
  const onGenderHandler = e => {
    setGender(e.target.value);
  };

  // 이메일 중복체크
  const emailCheckButton = () => {
    dispatch({
      type: EMAIL_CHECK_REQUEST,
      data: { email: email },
    });
  };

  // 닉네임 중복체크
  const nickCheckButton = () => {
    dispatch({
      type: NICK_CHECK_REQUEST,
      data: { nickName: nickName },
    });
  };
  // mui-datepick 생년월일 정규화
  const BirthFormat = dayjs(value).format('YYYYMMDD');

  // 회원가입 버튼
  const signUpButton = () => {
    // 유효성 검사
    if (email === '') {
      alert('이메일을 입력해주세요');
    } else if (name === '') {
      alert('이름을 입력해주세요');
    } else if (phoneNumber === '') {
      alert('핸드폰 번호를 입력해주세요');
    } else if (password === '') {
      alert('비밀번호를 입력해주세요');
    } else if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (nickName === '') {
      alert('닉네임을 입력해주세요');
    } else if (address === '') {
      alert('주소를 입력해주세요');
    } else if (value === '') {
      alert('생년월일을 입력해주세요');
    } else if (gender === '') {
      alert('성별을 입력해주세요');
    } else if (!emailCheckDone) {
      alert('이메일 중복체크를 해주세요');
    } else if (!nickCheckDone) {
      alert('닉네임 중복체크를 해주세요');
    } else {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          email: email,
          name: name,
          phoneNumber: phoneNumber,
          password: password,
          nickName: nickName,
          address: address,
          birth: BirthFormat,
          gender: gender,
        },
      });
    }
  };

  useEffect(() => {
    if (signUpDone) {
      history.push('/login');
    }
  }, [signUpDone, history]);
  return (
    <Layout>
      <Navbar />

      <Wrapper>
        <SignupBlock>
          <div id="scroll">
            <SignupHeader>
              <div id="title">SIGN UP</div>
              <div id="word">스타와의 만남을 준비하세요!</div>
            </SignupHeader>
            <SignupContent>
              <SignupContentRow>
                <input
                  type="text"
                  className="input check-input"
                  placeholder="Email"
                  onChange={onEmailHandler}
                ></input>
                <button
                  className="check-button"
                  onClick={() => {
                    emailCheckButton();
                  }}
                >
                  인증
                </button>
              </SignupContentRow>
              <SignupContentRow>
                <input
                  type="text"
                  className="input"
                  placeholder="Name"
                  onChange={onNameHandler}
                ></input>
              </SignupContentRow>
              <SignupContentRow>
                <input
                  type="text"
                  className="input"
                  placeholder="Phone Number"
                  onChange={onPhoneNumberHandler}
                ></input>
              </SignupContentRow>
              <SignupContentRow>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  onChange={onPasswordHandler}
                ></input>
              </SignupContentRow>
              <SignupContentRow>
                <input
                  type="password"
                  className="input"
                  placeholder="Password Check"
                  onChange={onPasswordCheckHandler}
                ></input>
              </SignupContentRow>
              <SignupContentRow>
                <input
                  type="text"
                  className="input check-input"
                  placeholder="NickName"
                  onChange={onNickNameHandler}
                ></input>
                <button
                  className="check-button"
                  onClick={() => {
                    nickCheckButton();
                  }}
                >
                  인증
                </button>
              </SignupContentRow>
              <SignupContentRow>
                <input
                  type="text"
                  className="input check-input"
                  placeholder="Address"
                  value={address}
                ></input>
                <button
                  className="check-button"
                  onClick={() => {
                    addrButton();
                  }}
                >
                  검색
                </button>
              </SignupContentRow>
              <SignupContentRow>
                <FormControl sx={{ width: '320px', border: 'none' }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={value}
                      onChange={newValue => {
                        setValue(newValue);
                      }}
                      inputFormat={'yyyy-MM-dd'}
                      mask={'____-__-__'}
                      renderInput={params => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </SignupContentRow>
              <SignupContentRow>
                <input
                  type="radio"
                  value="남자"
                  checked={gender === '남자' ? true : false}
                  onChange={onGenderHandler}
                ></input>
                남
                <input
                  type="radio"
                  value="여자"
                  checked={gender === '여자' ? true : false}
                  onChange={onGenderHandler}
                ></input>
                여
              </SignupContentRow>
              <SignupContentRow>
                <button
                  className="signup-button"
                  onClick={() => {
                    signUpButton();
                  }}
                >
                  가입하기
                </button>
              </SignupContentRow>
            </SignupContent>
          </div>
          {addressButton && <SearchAddrModal />}
        </SignupBlock>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
