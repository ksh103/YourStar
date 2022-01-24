import React, { useState } from 'react';
import {
  ScheduleWrapper,
  ScheduleBlock,
  ScheduleMenu,
  Menu,
  ScheduleContent,
} from './Schedule.style';
import { MdViewList, MdCalendarToday } from 'react-icons/md';
import { ScheduleCalendar, ScheduleList } from '../../components/Schedule';
export default function Schedule() {
  const [menu, setMenu] = useState(1);

  const toggleMenu = num => event => {
    setMenu(num);
  };

  return (
    <ScheduleWrapper>
      <ScheduleBlock>
        <ScheduleMenu>
          <Menu flag={menu === 1 ? 1 : 0}>
            <MdViewList onClick={toggleMenu(1)} />
          </Menu>
          <Menu flag={menu === 2 ? 1 : 0}>
            <MdCalendarToday onClick={toggleMenu(2)} />
          </Menu>
        </ScheduleMenu>
        <div>
          <ScheduleContent>
            {menu === 1 ? <ScheduleList /> : <ScheduleCalendar />}
          </ScheduleContent>
        </div>
      </ScheduleBlock>
    </ScheduleWrapper>
  );
}
