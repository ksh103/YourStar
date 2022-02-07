import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Block, Layout, Wrapper } from '../../styles/variables';
import { MypageContent, MypageHeader, MypageWrapper } from './Mypage.style';
import MypageProfile from '../../components/Mypage/MypageProfile';
import MypageMenu from '../../components/Mypage/MypageMenu';
import MypageCard from '../../components/Mypage/MypageCard';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { TOTAL_MEETINGS_REQUEST } from '../../store/modules/meeting';
import { SELECT_FANMEETING_REQUEST } from '../../store/modules/fan';

export default function Mypage() {
  const dispatch = useDispatch();
  const { totalMeetings, totalMeetingsDone, totalMeetingsLoading } =
    useSelector(state => state.meeting);
  const { selectFanMeetingDone, applicant } = useSelector(state => state.fan);
  const { menu, me } = useSelector(state => state.mypage);

  useEffect(() => {
    if (!selectFanMeetingDone) {
      dispatch({
        type: SELECT_FANMEETING_REQUEST,
        data: { memberId: me.memberId, page: 1, size: 100 },
      });
    }
  }, [dispatch, me, selectFanMeetingDone]);

  const content = () => {
    if (me.code === 2) {
      // 스타(오픈한 팬 미팅)
      if (!totalMeetingsDone && !totalMeetingsLoading) {
        // 전체 미팅 내역 받아오기
        dispatch(
          {
            type: TOTAL_MEETINGS_REQUEST,
            data: { page: 1, size: 100 },
          },
          [dispatch]
        );
      }
      const myMeeting = totalMeetings.filter(
        // 스타 자신이 오픈한 팬 미팅 정보
        meeting => meeting.code === me.managerCode
      );
      return myMeeting.map(item => <MypageCard data={item} key={item.id} />);
    } else if (menu === 1) {
      // 나의 팬미팅
      return applicant.map(item => (
        <MypageCard data={item} key={item.meetingId} />
      ));
    } else if (menu === 2) {
      // 추억보관함
      return applicant.map(item => (
        <MypageCard data={item} key={item.meetingId} />
      ));
    }
  };

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <MypageWrapper>
            <MypageHeader>
              <MypageProfile />
            </MypageHeader>
            <MypageContent>
              <MypageMenu />
              <div className="poster">
                <Grid container>{content()}</Grid>
              </div>
            </MypageContent>
          </MypageWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
