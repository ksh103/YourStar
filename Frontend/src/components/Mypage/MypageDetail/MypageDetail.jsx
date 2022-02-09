import React, { useEffect, useState } from 'react';
import { Block, Layout, Wrapper } from '../../../styles/variables';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { IoIosArrowBack } from 'react-icons/io';
import {
  MypageDetailContent,
  MypageDetailHeader,
  MypageDetailWrapper,
  UserModifyHeader,
} from './MypageDetail.style';
import {
  SignupContent,
  SignupContentRow,
} from '../../Memeber/Signup/Signup.style';
import {
  NICK_CHECK_REQUEST,
  setAddressButton,
} from '../../../store/modules/member';
import { useDispatch, useSelector } from 'react-redux';
import {
  DELETE_MEMBER_REQUEST,
  UPDATE_MEMBER_REQUEST,
} from '../../../store/modules/mypage';
import SearchAddrModal from '../../utils/modal/modalSearchAddr';
import { useHistory } from 'react-router';

export default function MypageDetail() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { me, updateMemberDone } = useSelector(state => state.mypage);
  const [phoneNumber, setPhoneNumber] = useState(me.phone);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickName, setNickName] = useState(me.nick);

  const { addressButton, address, nickCheckDone } = useSelector(
    state => state.member
  );

  // 주소 검색 버튼
  const addrButton = () => {
    dispatch(setAddressButton(true)); // redux 주소창 open
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

  const nickCheckButton = () => {
    dispatch({
      type: NICK_CHECK_REQUEST,
      data: { nickName: nickName },
    });
  };

  const UserUpdateButton = () => {
    // 유효성 검사
    if (phoneNumber === '') {
      alert('핸드폰 번호를 입력해주세요');
    } else if (password === '') {
      alert('비밀번호를 입력해주세요');
    } else if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (nickName === '') {
      alert('닉네임을 입력해주세요');
    } else if (address === '') {
      alert('주소를 입력해주세요');
    } else if (!nickCheckDone) {
      alert('닉네임 중복체크를 해주세요');
    } else {
      dispatch({
        type: UPDATE_MEMBER_REQUEST,
        data: {
          memberId: me.memberId,
          memberPhone: phoneNumber,
          memberPassword: password,
          memberNick: nickName,
          memberAddress: address,
        },
      });
    }
  };

  const UserDeleteButton = () => {
    if (window.confirm('정말 탈퇴 하시겠습니까?')) {
      dispatch({
        type: DELETE_MEMBER_REQUEST,
        data: { memberId: me.memberId },
      });
    } else {
      console.log('취소');
      return;
    }
  };

  useEffect(() => {
    if (updateMemberDone) {
      history.push('/mypage');
    }
  }, [updateMemberDone, history]);
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
            <UserModifyHeader>
              <div id="title">User Modify</div>
            </UserModifyHeader>
            <MypageDetailContent>
              <SignupContent>
                <SignupContentRow>
                  <input
                    type="text"
                    className="input"
                    placeholder={me.phone}
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
                    placeholder={me.nick}
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
                    placeholder={me.address}
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
                  <button
                    className="signup-button"
                    onClick={() => {
                      UserUpdateButton();
                    }}
                  >
                    수정하기
                  </button>
                </SignupContentRow>
                <SignupContentRow
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    UserDeleteButton();
                  }}
                >
                  회원탈퇴
                </SignupContentRow>
              </SignupContent>
            </MypageDetailContent>
          </MypageDetailWrapper>
          {addressButton && <SearchAddrModal />}
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
