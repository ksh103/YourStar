import React from 'react';
import {
  ScheduleDetailButton,
  ScheduleDetailImage,
  ScheduleDetailLeftWrapper,
} from './ScheduleDetail.style';
import poster from '../../../assets/images/poster1.jpg';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_FANMEETING_REQUEST } from '../../../store/modules/fan';
import axios from 'axios';
import { KAKAO_ADMIN_KEY } from '../../../utils/dev';
export default function ScheduleDetailLeft() {
  const { meeting } = useSelector(state => state.meeting);
  const { me } = useSelector(state => state.mypage);
  const history = useHistory();
  const dispatch = useDispatch();

  const state = {
    next_redirect_pc_url: '',
    tid: '',
    params: {
      cid: 'TC0ONETIME',
      partner_order_id: 'partner_order_id',
      partner_user_id: 'partner_user_id',
      item_name: meeting.name,
      quantity: 1,
      total_amount: meeting.price,
      tax_free_amount: 0,
      // router에 지정한 PayResult의 경로로 수정
      approval_url: `http://localhost:3000/pay`,
      fail_url: `http://localhost:3000/pay`,
      cancel_url: `http://localhost:3000/pay`,
    },
  };

  const showButton = () => {
    const now = new Date();
    const reserveMeeting = () => {
      if (me.memberId === 0) {
        return history.push('/login');
      }
      const { params } = state;
      axios({
        url: '/v1/payment/ready',
        method: 'POST',
        headers: {
          Authorization: `KakaoAK ${KAKAO_ADMIN_KEY}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        params,
      }).then(response => {
        const {
          data: { next_redirect_pc_url, tid },
        } = response;
        console.log(next_redirect_pc_url);
        console.log(tid);
        window.localStorage.setItem('tid', tid);
        window.localStorage.setItem('meetingId', meeting.id);
        window.location = next_redirect_pc_url;
      });
    };
    const cancelMeeting = () => {
      dispatch({
        type: DELETE_FANMEETING_REQUEST,
        data: { meetingId: meeting.id, memberId: me.memberId },
      });
    };

    if (new Date(meeting.endDate) < now) {
      return (
        <ScheduleDetailButton>
          <div>종료</div>
        </ScheduleDetailButton>
      );
    } else if (new Date(meeting.startDate) <= now)
      if (meeting.isReserve) {
        return (
          <ScheduleDetailButton color="3">
            <div>
              <Link to={`/room/${meeting.id}`}>입장하기</Link>
            </div>
          </ScheduleDetailButton>
        );
      } else {
        return (
          <ScheduleDetailButton>
            <div>미팅중</div>
          </ScheduleDetailButton>
        );
      }
    else if (new Date(meeting.openDate) <= now) {
      if (meeting.isReserve) {
        return (
          <ScheduleDetailButton color="2">
            <div onClick={cancelMeeting}>예매취소</div>
          </ScheduleDetailButton>
        );
      } else {
        if (meeting.applicantCnt === meeting.cnt) {
          return (
            <ScheduleDetailButton>
              <div>매진</div>
            </ScheduleDetailButton>
          );
        } else {
          return (
            <ScheduleDetailButton color="1">
              <div onClick={reserveMeeting}>예매하기</div>
            </ScheduleDetailButton>
          );
        }
      }
    } else {
      return (
        <ScheduleDetailButton>
          <div>준비중</div>
        </ScheduleDetailButton>
      );
    }
  };

  return (
    <ScheduleDetailLeftWrapper>
      <ScheduleDetailImage>
        <img src={poster} alt="postesr" />
      </ScheduleDetailImage>
      {showButton()}
    </ScheduleDetailLeftWrapper>
  );
}
