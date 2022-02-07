import React, { useEffect } from 'react';
import {
  AdminMeetindDetailHeader,
  AdminMeetingDetailContent,
  AdminMeetingDetailFooter,
} from './AdminMeeting.style';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams } from 'react-router';
import { Block, Layout, Wrapper } from '../../../styles/variables';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  DETAIL_MEETING_REQUEST,
  UPDATE_APPROVE_REQUEST,
} from '../../../store/modules/meeting';

const calcTime = (a, b) => {
  const date1 = moment(b, 'YYYY-MM-DD HH:mm:ss');
  const date2 = moment(a, 'YYYY-MM-DD HH:mm:ss');
  let time = date1.diff(date2, 'minutes') + '분';
  return time;
};

export default function AdminMeetingDetail() {
  const { id } = useParams(); // 미팅번호
  const dispatch = useDispatch();
  const { meeting } = useSelector(state => state.meeting);
  useEffect(() => {
    dispatch({
      type: DETAIL_MEETING_REQUEST,
      data: { memberId: 0, meetingId: id },
    });
  }, [id, dispatch]);
  const updateApprove = () => {
    dispatch({
      type: UPDATE_APPROVE_REQUEST,
      data: meeting,
    });
  };
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <AdminMeetindDetailHeader>
            <div id="meeting-icon">
              <IoIosArrowBack onClick={() => window.history.back()} />
            </div>
            <div id="meeting-name">{meeting.meeting_name}</div>
          </AdminMeetindDetailHeader>
          <AdminMeetingDetailContent>
            <div id="detail">
              <div id="detail2">
                <TableContainer sx={{ width: '80%' }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell width={'30%'}>미팅번호</TableCell>
                        <TableCell>{meeting.id}</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>멤버코드</TableCell>
                        <TableCell>{meeting.code}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>미팅이름</TableCell>
                        <TableCell>{meeting.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>예매날짜</TableCell>
                        <TableCell>{meeting.openDate}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>미팅날짜</TableCell>
                        <TableCell>{meeting.startDate}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>관람시간</TableCell>
                        <TableCell>
                          {calcTime(meeting.startDate, meeting.endDate)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>인원수</TableCell>
                        <TableCell>{meeting.cnt}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>가격</TableCell>
                        <TableCell>{meeting.price}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>설명</TableCell>
                        <TableCell>{meeting.description}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>이미지</TableCell>
                        <TableCell>김다미포스터</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <AdminMeetingDetailFooter color={meeting.approve ? '1' : '0'}>
                {meeting.approve ? (
                  <div>등록완료</div>
                ) : (
                  <div onClick={() => updateApprove()}>등록하기</div>
                )}
              </AdminMeetingDetailFooter>
            </div>
          </AdminMeetingDetailContent>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
