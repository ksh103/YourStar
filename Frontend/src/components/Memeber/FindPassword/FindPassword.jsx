import React from 'react';
import { Layout, Wrapper } from '../../../styles/variables';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import {
  FindPwBlock,
  FindPwContent,
  FindPwContentRow,
  FindPwHeader,
} from './FindPassword.style';

export default function FindPassword() {
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <FindPwBlock>
          <FindPwHeader>
            <div id="title">비밀번호 찾기</div>
            <div id="word">
              회원정보에 등록된 정보로 비밀번호를 찾을 수 있습니다.
            </div>
          </FindPwHeader>
          <FindPwContent>
            <FindPwContentRow>
              <input type="text" placeholder="Name" id="name" />
            </FindPwContentRow>
            <FindPwContentRow>
              <input type="text" placeholder="Email" id="email" />
            </FindPwContentRow>
            <FindPwContentRow>
              <button>찾기</button>
            </FindPwContentRow>
          </FindPwContent>
        </FindPwBlock>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
