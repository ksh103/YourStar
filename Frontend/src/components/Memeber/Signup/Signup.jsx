import React, { useState } from 'react';
// import { SignupSevenGrid } from '../../../pages/Login/DividGrid';
import { Layout, Wrapper } from '../../../styles/variables';
// import Grid from '@mui/material/Grid';
// import {
//   LoginSignupBlock,
//   InFormBlock,
//   ScheduleWrapper,
// } from '../../../pages/Login/Login.style';

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

import Radio from '@mui/material/Radio';
export default function Signup() {
  const [value, setValue] = useState(null);
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
                  id="email"
                ></input>
                <button className="check-button">인증</button>
              </SignupContentRow>
              <SignupContentRow>
                <input type="text" className="input" placeholder="Name"></input>
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
                <FormControl sx={{ width: '320px', border: 'none' }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={value}
                      onChange={newValue => {
                        setValue(newValue);
                      }}
                      renderInput={params => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </SignupContentRow>
              <SignupContentRow>
                {/* <input
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
                ></input> */}
                여
              </SignupContentRow>
              <SignupContentRow>
                <button className="signup-button">가입하기</button>
              </SignupContentRow>
            </SignupContent>
          </div>
        </SignupBlock>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
