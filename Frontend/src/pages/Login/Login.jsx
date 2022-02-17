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
import { LOG_IN_REQUEST, SET_MENU } from '../../store/modules/member';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const [id, SetId] = useState('');
  const [pw, SetPw] = useState('');

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
    }
  };
  const changeMenu = m => {
    dispatch({ type: SET_MENU, data: m });
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
                <Link
                  to="/signup"
                  style={{ color: 'gray' }}
                  onClick={() => changeMenu('signup')}
                >
                  회원가입
                </Link>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Link
                  to="/find/password"
                  style={{ color: 'gray' }}
                  onClick={() => changeMenu('main')}
                >
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
