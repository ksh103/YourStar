import React from 'react';
import {
  MypageIconBlock,
  MypageProfileWrapper,
  MypageProfileBlock,
  MypageProfileButton,
} from './Mypage.style';
import { MdStar, MdPerson, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function MypageProfile() {
  const role = 3;
  return (
    <MypageProfileWrapper>
      <div>
        <MypageProfileBlock>
          <div id="profileIcon">
            <MypageIconBlock>
              {role === 1 && <MdPerson />}
              {role === 2 && <MdStar />}
              {role === 3 && <MdSettings />}
            </MypageIconBlock>
          </div>
          <div>
            <div id="profileNickname">김다미바라기</div>
            <div id="profileEmail">wltn1873@naver.com</div>
          </div>
        </MypageProfileBlock>
        <MypageProfileButton>
          <button>
            <Link to="/mypage/wltnals">회원 수정</Link>
          </button>
        </MypageProfileButton>
      </div>
    </MypageProfileWrapper>
  );
}
