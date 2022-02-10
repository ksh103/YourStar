import React, { useEffect } from 'react';
import {
  AdminMeetindDetailHeader,
  AdminMeetingDetailContent,
  AdminMeetingDetailFooter,
} from './AdminMeeting.style';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory, useParams } from 'react-router';
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
import { IMAGE_URL } from '../../../utils/contants';

const calcTime = (a, b) => {
  const date1 = moment(b, 'YYYY-MM-DD HH:mm:ss');
  const date2 = moment(a, 'YYYY-MM-DD HH:mm:ss');
  let time = date1.diff(date2, 'minutes') + '분';
  return time;
};

export default function AdminMeetingDetail() {
  const { id } = useParams(); // 미팅번호
  const dispatch = useDispatch();
  const history = useHistory();
  const { meeting, detailMeetingDone, updateApproveDone } = useSelector(
    state => state.meeting
  );
  useEffect(() => {
    dispatch({
      type: DETAIL_MEETING_REQUEST,
      data: { memberId: 0, meetingId: id },
    });
  }, [id, dispatch]);

  useEffect(() => {
    // 미팅 승인 후 메인페이지로 이동
    if (updateApproveDone) {
      history.push('/');
    }
  }, [updateApproveDone, history]);

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
              <IoIosArrowBack
                onClick={() => window.history.back()}
                style={{ fontSize: '40px' }}
              />
            </div>
            <div id="meeting-name">{meeting.meeting_name}</div>
          </AdminMeetindDetailHeader>
          <AdminMeetingDetailContent>
            <div id="detail">
              <div id="detail2">
                <TableContainer sx={{ padding: '0 10%' }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                            width: '30%',
                          }}
                        >
                          미팅번호
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.id}
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          멤버코드
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.code}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          미팅이름
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          예매날짜
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.openDate}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          미팅날짜
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.startDate}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          관람시간
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {calcTime(meeting.startDate, meeting.endDate)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          인원수
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.cnt}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                          l
                        >
                          가격
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.price}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          설명
                        </TableCell>
                        <TableCell sx={{ fontSize: '1.5rem' }}>
                          {meeting.description}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                          이미지
                        </TableCell>
                        <TableCell>
                          {detailMeetingDone && meeting.image === null ? (
                            <img
                              width="400px"
                              src={'/images/noimg.gif'}
                              alt={meeting.id}
                            />
                          ) : (
                            <img
                              src={`${IMAGE_URL}${meeting.image}`}
                              width="300px"
                              alt={meeting.id}
                            />
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <AdminMeetingDetailFooter color={meeting.approve ? '1' : '0'}>
                {meeting.approve ? (
                  <div style={{ fontSize: '1.5rem' }}>등록완료</div>
                ) : (
                  <div
                    onClick={() => updateApprove()}
                    style={{ fontSize: '1.2rem' }}
                  >
                    등록하기
                  </div>
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
