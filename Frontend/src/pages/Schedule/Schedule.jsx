import React, { useState } from 'react';
import { ScheduleMenu, Menu, ScheduleContent } from './Schedule.style';
import { MdViewList, MdCalendarToday } from 'react-icons/md';
import { ScheduleCalendar, ScheduleList } from '../../components/Schedule';
import { Block, Layout, Wrapper } from '../../styles/variables';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const meeting = [
  {
    id: 1,
    name: '김다미 팬미팅',
    meeting_start_date: '2022-01-30 14:00:00',
  },
  {
    id: 2,
    name: '최우식 팬미팅',
    meeting_start_date: '2022-01-30 12:00:00',
  },
  {
    id: 3,
    name: '지수민',
    meeting_start_date: '2022-01-11 01:00:00',
  },
  {
    id: 4,
    name: '박동준',
    meeting_start_date: '2022-01-03 01:00:00',
  },
  {
    id: 5,
    name: '김지슬',
    meeting_start_date: '2022-01-22 01:00:00',
  },
  {
    id: 6,
    name: '손은성',
    meeting_start_date: '2022-01-01 01:00:00',
  },
  {
    id: 7,
    name: '안영원',
    meeting_start_date: '2022-01-14 01:00:00',
  },
  {
    id: 8,
    name: '강소현',
    meeting_start_date: '2022-01-26 01:00:00',
  },
];
export default function Schedule() {
  const [menu, setMenu] = useState(1);

  const toggleMenu = num => event => {
    setMenu(num);
  };

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <ScheduleMenu>
            <Menu flag={menu === 1 ? 1 : 0}>
              <MdViewList onClick={toggleMenu(1)} />
            </Menu>
            <Menu flag={menu === 2 ? 1 : 0}>
              <MdCalendarToday onClick={toggleMenu(2)} />
            </Menu>
          </ScheduleMenu>
          <ScheduleContent>
            <div id="schedule">
              {menu === 1 ? (
                <ScheduleList meeting={meeting} />
              ) : (
                <ScheduleCalendar meeting={meeting} />
              )}
            </div>
          </ScheduleContent>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
