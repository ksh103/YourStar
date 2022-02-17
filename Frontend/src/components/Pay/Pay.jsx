import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Block, Layout, Wrapper } from '../../styles/variables';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { INSERT_FANMEETING_REQUEST } from '../../store/modules/fan';
import { Link } from 'react-router-dom';
import { PayWrapper, PayBlock } from './Pay.style';
import { KAKAO_ADMIN_KEY } from '../../utils/dev';

export default function Pay(props) {
  const { me, myPageDone } = useSelector(state => state.mypage);
  const { meeting } = useSelector(state => state.meeting);
  const dispatch = useDispatch();
  const meetingId = window.localStorage.getItem('meetingId');
  const tid = window.localStorage.getItem('tid');
  useEffect(() => {
    if (tid && meetingId) {
      console.log('결제함 이제 결제 완료 응답 받고 처리해야함');
      const state = {
        params: {
          cid: 'TC0ONETIME',
          tid: tid,
          partner_order_id: 'partner_order_id',
          partner_user_id: 'partner_user_id',
          pg_token: props.location.search.split('=')[1],
        },
      };

      const { params } = state;
      if (myPageDone) {
        axios({
          url: '/v1/payment/approve',
          method: 'POST',
          headers: {
            Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
          params,
        }).then(response => {
          // 결제 승인에 대한 응답 출력
          console.log('결제 완료 응답 처리 성공');
          if (response.status === 200) {
            dispatch({
              type: INSERT_FANMEETING_REQUEST,
              data: {
                meetingId: meetingId,
                memberId: me.memberId,
                email: me.email,
              },
            });
          }
          console.log('응답 처리 후 세션 정보 삭제');
          window.localStorage.removeItem('tid');
          window.localStorage.removeItem('meetingId');
        });
      }
    }
  }, [
    dispatch,
    myPageDone,
    me.memberId,
    meetingId,
    props.location.search,
    tid,
    me.email,
  ]);

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <PayWrapper>
            <PayBlock>
              <div className="desc">
                <div>미팅 : {meeting.name}</div>
                <div>일정 : {meeting.startDate}</div>
                <div>가격 : {meeting.price}원</div>
              </div>
              <div className="button">
                <Link to={`/schedule/${meetingId}`}>결제완료</Link>
              </div>
            </PayBlock>
          </PayWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
