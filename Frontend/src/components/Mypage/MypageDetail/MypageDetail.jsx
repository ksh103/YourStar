import React from 'react';
import { Block, Layout, Wrapper } from '../../../styles/variables';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { IoIosArrowBack } from 'react-icons/io';
import {
  MypageDetailContent,
  MypageDetailHeader,
  MypageDetailWrapper,
} from './MypageDetail.style';
import {
  SignupContent,
  SignupContentRow,
} from '../../Memeber/Signup/Signup.style';
export default function MypageDetail() {
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <MypageDetailWrapper>
            <MypageDetailHeader>
              <div id="back-icon">
                <IoIosArrowBack onClick={() => window.history.back()} />
              </div>
            </MypageDetailHeader>
            <MypageDetailContent>
              <SignupContent>
                <SignupContentRow>
                  <input
                    type="text"
                    className="input check-input"
                    placeholder="Email"
                    id="email"
                  ></input>
                  <button className="check-button">인증</button>
                </SignupContentRow>
                <SignupContentRow>
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                  ></input>
                </SignupContentRow>
                <SignupContentRow>
                  <input
                    type="text"
                    className="input"
                    placeholder="Phone Number"
                  ></input>
                </SignupContentRow>
                <SignupContentRow>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  ></input>
                </SignupContentRow>
                <SignupContentRow>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password Check"
                  ></input>
                </SignupContentRow>
                <SignupContentRow>
                  <input
                    type="text"
                    className="input"
                    placeholder="NickName"
                  ></input>
                </SignupContentRow>
                <SignupContentRow>
                  <input
                    type="text"
                    className="input check-input"
                    placeholder="Adress"
                  ></input>
                  <button className="check-button">검색</button>
                </SignupContentRow>

                <SignupContentRow>
                  <button className="signup-button">수정하기</button>
                </SignupContentRow>
                <SignupContentRow>회원탈퇴</SignupContentRow>
              </SignupContent>
            </MypageDetailContent>
          </MypageDetailWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
