import React from 'react';
import {
  ScheduleDetailButton,
  ScheduleDetailImage,
  ScheduleDetailLeftWrapper,
} from './ScheduleDetail.style';
import poster from '../../../assets/images/poster1.jpg';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  DELETE_FANMEETING_REQUEST,
  INSERT_FANMEETING_REQUEST,
} from '../../../store/modules/fan';

export default function ScheduleDetailLeft() {
  const { meeting } = useSelector(state => state.meeting);
  const { me } = useSelector(state => state.mypage);
  const history = useHistory();
  const dispatch = useDispatch();
  const showButton = () => {
    const now = new Date();
    const reserveMeeting = () => {
      if (me.memberId === 0) {
        return history.push('/login');
      }
      dispatch({
        type: INSERT_FANMEETING_REQUEST,
        data: { meetingId: meeting.id, memberId: me.memberId },
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
