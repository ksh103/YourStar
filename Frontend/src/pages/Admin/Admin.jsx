import React from 'react';
import { Block, Layout, Wrapper } from '../../styles/variables';
import { AdminContent, AdminHeader } from './Admin.style';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { AdminMeetingList, AdminMember } from '../../components/Admin/index';

export default function Admin() {
  const num = 1;
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <AdminHeader>신청 미팅 리스트 | 회원관리</AdminHeader>
          <AdminContent>
            <div id="admin">
              {num === 1 ? <AdminMeetingList /> : <AdminMember />}
            </div>
          </AdminContent>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
