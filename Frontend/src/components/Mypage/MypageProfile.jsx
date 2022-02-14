import React from 'react';
import {
  MypageIconBlock,
  MypageProfileWrapper,
  MypageProfileBlock,
  MypageProfileButton,
} from './Mypage.style';
import { MdStar, MdPerson, MdSettings } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function MypageProfile() {
  const { me, myPageDone } = useSelector(state => state.mypage);
  // const role = 3;
  return (
    <MypageProfileWrapper>
      <div>
        <MypageProfileBlock>
          <div id="profileIcon">
            <MypageIconBlock>
              {me.code === 3 && <MdPerson />}
              {me.code === 4 && <MdStar />}
              {me.code === 1 && <MdSettings />}
            </MypageIconBlock>
          </div>
          <div>
            <div id="profileNickname">{me.name}</div>
            <div id="profileEmail">{me.email}</div>{' '}
            <MypageProfileButton>
              <button>
                <Link to="/mypage/wltnals">회원 수정</Link>
              </button>
            </MypageProfileButton>
          </div>
        </MypageProfileBlock>
      </div>
    </MypageProfileWrapper>
  );
}
