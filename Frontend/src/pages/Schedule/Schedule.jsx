import React, { useEffect, useState } from 'react';
import { ScheduleMenu, Menu, ScheduleContent } from './Schedule.style';
import { MdViewList, MdCalendarToday } from 'react-icons/md';
import { ScheduleCalendar, ScheduleList } from '../../components/Schedule';
import { Block, Layout, Wrapper } from '../../styles/variables';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
              {menu === 1 ? <ScheduleList /> : <ScheduleCalendar />}
            </div>
          </ScheduleContent>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
