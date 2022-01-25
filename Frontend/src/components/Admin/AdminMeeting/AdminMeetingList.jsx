import React from 'react';
import { Link, Route } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  AdminMeetingListWrapper,
  AdminMeetingListBlock,
  AdminMeetingApproveButton,
} from './AdminMeeting.style';
import { AdminMeetingDetail } from '..';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData(1, 123, '김다미1', '2022-01-11 12:00:00', 1),
  createData(2, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(3, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(4, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
  createData(5, 123, '김다미1', '2022-01-11 12:00:00', 0),
];

export default function AdminMeetingList() {
  return (
    <AdminMeetingListWrapper>
      <div style={{ border: '1px solid black' }}>
        <h2>미팅 신청 리스트 | 회원 리스트</h2>
      </div>
      {/* <div>
        <Route exact path="/admin" component={AdminMeetingList} />
        <Route exact path="/admin/:id" component={AdminMeetingDetail} />
      </div> */}
      <AdminMeetingListBlock>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>미팅번호</TableCell>
                <TableCell>멤버코드</TableCell>
                <TableCell>미팅제목</TableCell>
                <TableCell>미팅날짜</TableCell>
                <TableCell>승인상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    {/* <Link to="/admin/1">{row.calories}</Link> */}
                  </TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>
                    {row.protein === 0 ? (
                      <AdminMeetingApproveButton color={0}>
                        대기
                      </AdminMeetingApproveButton>
                    ) : (
                      <AdminMeetingApproveButton color={1}>
                        완료
                      </AdminMeetingApproveButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AdminMeetingListBlock>
    </AdminMeetingListWrapper>
  );
}
