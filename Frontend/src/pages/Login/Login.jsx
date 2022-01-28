import React from 'react';
import { Layout, Wrapper } from '../../styles/variables';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {
  LoginBlock,
  LoginContent,
  LoginContentRow,
  LoginHeader,
} from './Login.style';
import { Link } from 'react-router-dom';

export default function Login() {
  // const [values, setValues] = React.useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });

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
              <input id="id" type="text" placeholder="id" />
            </LoginContentRow>
            <LoginContentRow>
              <input type="password" placeholder="password" />
            </LoginContentRow>
            <LoginContentRow>
              <button id="login-button">로그인</button>
            </LoginContentRow>
            <LoginContentRow>
              <div id="footer">
                <p>아직 회원이 아니신가요?</p>
                <Link to="/signup">회원가입</Link>
                <Link to="/find/password">비밀번호 찾기</Link>
              </div>
            </LoginContentRow>
          </LoginContent>
        </LoginBlock>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
