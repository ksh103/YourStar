import React from 'react';
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

const meeting = {
  meeting_id: 1,
  manager_code: 1,
  meeting_name: '김다미 3차 온라인 팬미팅',
  meeting_open_date: '2022-01-26 12:00:00',
  meeting_start_date: '2022-01-27 12:00:00',
  meeting_end_date: '2022-01-27 14:00:00',
  meeting_cnt: 10,
  meeting_price: 100000,
  meeting_description:
    '그룹 2PM 멤버겸 배우 이준호는 오는 22일과 23일 양일간 서울 용산구 블루스퀘어 마스터카드홀에서 오프라인 단독 팬미팅 JUNHO THE MOMENT 를 개최한다. 23일에는 오프라인 팬미팅과 함께 비욘드 라이브 플랫폼을 통해 동시 진행되는 온라인 유료  생중계로 월드와이드 팬들과 소통한다.',
};
export default function ScheduleDetail() {
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
                <div id="meeting-name">{meeting.meeting_name}</div>
              </ScheduleDetailTitle>
            </ScheduleDetailHeader>
            <ScheduleDetailContent>
              <div id="detail">
                <div id="detail2">
                  <ScheduleDetailLeft />
                  <ScheduleDetailRight meeting={meeting} />
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
