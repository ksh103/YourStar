import React, { useEffect, useState } from 'react';
import { Layout, Wrapper } from '../../styles/variables';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  LoginBlock,
  LoginContent,
  LoginContentRow,
  LoginHeader,
} from './Login.style';
import { LOG_IN_REQUEST } from '../../store/modules/member';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [id, SetId] = useState('');
  const [pw, SetPw] = useState('');
  const { logInDone } = useSelector(state => state.member);

  useEffect(() => {
    // 로그인 처리 되었을 때 main으로 이동
    if (logInDone) {
      history.push('/');
    }
  }, [logInDone, history]);

  const LoginButton = () => {
    if (id === '') {
      alert('아이디를 입력하세요');
    } else if (pw === '') {
      alert('패스워드를 입력하세요');
    } else {
      dispatch({
        type: LOG_IN_REQUEST,
        data: { id: id, pw: pw },
      });
      // done 일 때 메인으로 이동하기, 어떤 값으로 이동하냐?
    }
  };

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <LoginBlock>
          <LoginHeader>
            <div id="title">LOGIN</div>
            <div id="word">당신의 스타를 만나보세요!</div>
          </LoginHeader>
          <LoginContent>
            <LoginContentRow>
              <input
                id="id"
                type="text"
                placeholder="id"
                onChange={e => {
                  SetId(e.target.value);
                }}
              />
            </LoginContentRow>
            <LoginContentRow>
              <input
                type="password"
                placeholder="password"
                onChange={e => {
                  SetPw(e.target.value);
                }}
              />
            </LoginContentRow>
            <LoginContentRow>
              <button id="login-button" onClick={() => LoginButton()}>
                로그인
              </button>
            </LoginContentRow>
            <LoginContentRow>
              <div id="footer">
                <p>아직 회원이 아니신가요?</p>
                <br />
                <Link to="/signup" style={{ color: 'gray' }}>
                  회원가입
                </Link>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Link to="/find/password" style={{ color: 'gray' }}>
                  비밀번호 찾기
                </Link>
              </div>
            </LoginContentRow>
          </LoginContent>
        </LoginBlock>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
