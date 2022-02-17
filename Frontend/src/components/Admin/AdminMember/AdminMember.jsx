import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CREATE_MANAGER_FAILURE,
  CREATE_MANAGER_REQUEST,
} from '../../../store/modules/admin';
import {
  FindPwContent,
  FindPwContentRow,
} from '../../Memeber/FindPassword/FindPassword.style';
import { AdminMemberWrapper, AccountWrapper } from './AdminMember.style';
import { useHistory } from 'react-router';

export default function AdminMember() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [officialCnt, setOfficialCnt] = useState('');
  const [starCnt, setStarCnt] = useState('');
  const [email, setEmail] = useState('');
  const { createManagerDone } = useSelector(state => state.admin);

  const createManager = () => {
    if (name === '') {
      alert('소속사 이름을 입력해주세요');
    } else if (officialCnt === '') {
      alert('관계자 계정 수를 입력해주세요');
    } else if (starCnt === '') {
      alert('스타 계정 수를 입력해주세요');
    } else if (email === '') {
      alert('이메일을 입력해주세요');
    } else {
      dispatch({
        type: CREATE_MANAGER_REQUEST,
        data: {
          managerCodeName: name,
          accountCnt: officialCnt,
          starAccountCnt: starCnt,
          managerEmail: email,
        },
      });
    }
  };

  useEffect(() => {
    if (createManagerDone) {
      history.push('/');
      dispatch({ type: CREATE_MANAGER_FAILURE });
    }
  }, [createManagerDone, history, dispatch]);
  return (
    <AdminMemberWrapper>
      <FindPwContent>
        <FindPwContentRow>
          <input
            type="text"
            placeholder="이메일 주소"
            id="email"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </FindPwContentRow>
        <FindPwContentRow>
          <input
            type="text"
            placeholder="소속사 이름"
            id="managerCodeName"
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </FindPwContentRow>
        <FindPwContentRow>
          <input
            type="number"
            placeholder="관계자 계정 수"
            id="officialAccountCnt"
            onChange={e => {
              setOfficialCnt(e.target.value);
            }}
          />
        </FindPwContentRow>
        <FindPwContentRow>
          <input
            type="number"
            placeholder="스타 계정 수"
            id="starAccountCnt"
            onChange={e => {
              setStarCnt(e.target.value);
            }}
          />
        </FindPwContentRow>
        <FindPwContentRow>
          <button onClick={() => createManager()}>생성하기</button>
        </FindPwContentRow>
      </FindPwContent>
      <AccountWrapper />
    </AdminMemberWrapper>
  );
}
