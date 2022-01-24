import React from 'react';
import { AdminWrapper, AdminBlock } from './Admin.style';
import AdminMeeting from './AdminMeeting/AdminMeeting';
export default function AdminComponent() {
  return (
    <AdminWrapper>
      <AdminBlock>
        <AdminMeeting />
      </AdminBlock>
    </AdminWrapper>
  );
}
