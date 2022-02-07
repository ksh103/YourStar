import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AdminMeetingApproveButton } from './AdminMeeting.style';
import { useDispatch, useSelector } from 'react-redux';
import { TOTAL_MEETINGS_REQUEST } from '../../../store/modules/meeting';

export default function AdminMeetingList() {
  const dispatch = useDispatch();
  const { totalMeetings, totalMeetingsDone } = useSelector(
    state => state.meeting
  );
  useEffect(() => {
    if (!totalMeetingsDone) {
      dispatch({
        type: TOTAL_MEETINGS_REQUEST,
        data: { page: 1, size: 10 },
      });
    }
  }, [totalMeetingsDone, dispatch]);

  return (
    <TableContainer>
      <Table aria-label="simple table">
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
          {totalMeetings.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/admin/${row.id}`}>{row.id}</Link>
              </TableCell>
              <TableCell>{row.code}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>
                {!row.approve ? (
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
  );
}
