import React, { useState } from 'react';
import { Block, Layout, Wrapper } from '../../styles/variables';
import { AdminContent, AdminHeader } from './Admin.style';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { AdminMeetingList, AdminMember } from '../../components/Admin/index';

export default function Admin() {
  const [menu, setMenu] = useState(1);

  const toggleMenu = num => () => {
    setMenu(num);
  };
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <AdminHeader menu={menu}>
            <div onClick={toggleMenu(1)} className="menu1">
              미팅 리스트
            </div>
            |
            <div onClick={toggleMenu(2)} className="menu2">
              회원 등록
            </div>
          </AdminHeader>
          <AdminContent>
            <div id="admin">
              {menu === 1 ? <AdminMeetingList /> : <AdminMember />}
            </div>
          </AdminContent>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
