import React from 'react';
import { useSelector } from 'react-redux';
import { Block, Layout, Wrapper } from '../../styles/variables';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { PayWrapper, PayBlock } from './Pay.style';

export default function Pay() {
  const { meeting } = useSelector(state => state.meeting);
  // const meetingId = window.localStorage.getItem('meetingId');
  // const tid = window.localStorage.getItem('tid');
  // useEffect(() => {
  //   if (tid && meetingId) {
  //     const state = {
  //       params: {
  //         cid: 'TC0ONETIME',
  //         tid: tid,
  //         partner_order_id: 'partner_order_id',
  //         partner_user_id: 'partner_user_id',
  //         pg_token: props.location.search.split('=')[1],
  //       },
  //     };

  //     const { params } = state;
  //     if (myPageDone) {
  //       axios({
  //         url: '/v1/payment/approve',
  //         method: 'POST',
  //         headers: {
  //           Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
  //           'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //         },
  //         params,
  //       }).then(response => {
  //         // 결제 승인에 대한 응답 출력
  //         if (response.status === 200) {
  //           dispatch({
  //             type: INSERT_FANMEETING_REQUEST,
  //             data: {
  //               meetingId: meetingId,
  //               memberId: me.memberId,
  //               email: me.email,
  //             },
  //           });
  //         }
  //         window.localStorage.removeItem('tid');
  //         window.localStorage.removeItem('meetingId');
  //       });
  //     }
  //   }
  // }, [
  //   dispatch,
  //   myPageDone,
  //   me.memberId,
  //   meetingId,
  //   props.location.search,
  //   tid,
  //   me.email,
  // ]);

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
                <Link to={`/schedule/${meeting.id}`}>결제완료</Link>
              </div>
            </PayBlock>
          </PayWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
