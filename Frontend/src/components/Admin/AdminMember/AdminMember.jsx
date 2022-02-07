import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_MANAGER_REQUEST } from '../../../store/modules/admin';
import {
  FindPwContent,
  FindPwContentRow,
} from '../../Memeber/FindPassword/FindPassword.style';
import { AdminMemberWrapper } from './AdminMember.style';

export default function AdminMember() {
  const [name, setName] = useState('');
  const [cnt, setCnt] = useState('');
  const dispatch = useDispatch();

  const createManager = () => {
    if (name === '') {
      alert('소속을 입력해주세요');
    } else if (cnt === '') {
      alert('관계자 수를 입력해주세요');
    } else {
      dispatch({
        type: CREATE_MANAGER_REQUEST,
        data: { name: name, cnt: cnt },
      });
    }
  };

  return (
    <AdminMemberWrapper>
      <FindPwContent>
        <FindPwContentRow>
          <input
            type="text"
            placeholder="소속"
            id="managerCodeName"
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </FindPwContentRow>
        <FindPwContentRow>
          <input
            type="number"
            placeholder="관계자수"
            id="accountCnt"
            onChange={e => {
              setCnt(e.target.value);
            }}
          />
        </FindPwContentRow>
        <FindPwContentRow>
          <button onClick={() => createManager()}>생성하기</button>
        </FindPwContentRow>
      </FindPwContent>
      <div>gdgd</div>
    </AdminMemberWrapper>
  );
}
