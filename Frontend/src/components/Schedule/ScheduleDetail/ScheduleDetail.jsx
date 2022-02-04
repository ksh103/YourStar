import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Block, Layout, Wrapper } from '../../../styles/variables';
import {
  ScheduleDetailContent,
  ScheduleDetailHeader,
  ScheduleDetailTitle,
  ScheduleDetailWrapper,
} from './ScheduleDetail.style';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ScheduleDetailLeft from '../../Schedule/ScheduleDetail/ScheduleDetailLeft';
import ScheduleDetailRight from '../../Schedule/ScheduleDetail/ScheduleDetailRight';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { SELECT_MEETING_REQUEST } from '../../../store/modules/meeting';

export default function ScheduleDetail() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SELECT_MEETING_REQUEST,
      data: state,
    });
  }, [dispatch, state]);

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <ScheduleDetailWrapper>
            <ScheduleDetailHeader>
              <ScheduleDetailTitle>
                <div id="meeting-icon">
                  <IoIosArrowBack onClick={() => window.history.back()} />
                </div>
                <div id="meeting-name">{state.meetingName}</div>
              </ScheduleDetailTitle>
            </ScheduleDetailHeader>
            <ScheduleDetailContent>
              <div id="detail">
                <div id="detail2">
                  <ScheduleDetailLeft />
                  <ScheduleDetailRight data={state} />
                </div>
              </div>
            </ScheduleDetailContent>
          </ScheduleDetailWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
