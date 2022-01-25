import React from 'react';
import { AdminMeetingList } from '../../components/Admin';
import Navber from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Layout } from '../../styles/variables';

export default function Admin() {
  return (
    <Layout>
      <Navber />
      {/* <AdminMeetingList /> */}
      <Footer />
    </Layout>
  );
}
