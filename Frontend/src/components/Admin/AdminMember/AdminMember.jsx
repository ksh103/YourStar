import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_MANAGER_REQUEST } from '../../../store/modules/admin';
import {
  FindPwContent,
  FindPwContentRow,
} from '../../Memeber/FindPassword/FindPassword.style';
import { AdminMemberWrapper, AccountWrapper } from './AdminMember.style';

export default function AdminMember() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [officialCnt, setOfficialCnt] = useState('');
  const [starCnt, setStarCnt] = useState('');
  const { createdAccount } = useSelector(state => state.admin);

  const createManager = () => {
    if (name === '') {
      alert('소속사 이름을 입력해주세요');
    } else if (officialCnt === '') {
      alert('관계자 계정 수를 입력해주세요');
    } else if (starCnt === '') {
      alert('스타 계정 수를 입력해주세요');
    } else {
      dispatch({
        type: CREATE_MANAGER_REQUEST,
        data: {
          managerCodeName: name,
          accountCnt: officialCnt,
          starAccountCnt: starCnt,
        },
      });
    }
  };
  console.log(createdAccount);
  const accountList = createdAccount.map(account => (
    <div>
      ID: {account.email} / PW: {account.password}
    </div>
  ));
  return (
    <AdminMemberWrapper>
      <FindPwContent>
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
            id="officiatAccountCnt"
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
      {createdAccount.length > 0 && (
        <AccountWrapper>
          <div>
            <Grid container>
              <Grid
                xs={12}
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  marginBottom: '10px',
                }}
              >
                생성된 계정{<br />}(star: 스타계정 / manager: 관계자계정)
              </Grid>
              <Grid xs={12} style={{ textAlign: 'center' }}>
                {accountList}
              </Grid>
            </Grid>
          </div>
        </AccountWrapper>
      )}
    </AdminMemberWrapper>
  );
}
