import React from 'react';
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

const calcTime = (a, b) => {
  const date1 = new Date(a);
  const date2 = new Date(b);
  const sec = date2.getTime() - date1.getTime();
  return sec / 1000 / 60 / 60 + '시간 ' + ((sec / 1000) % 60) + '분';
};

export default function AdminMeetingDetail() {
  const { id } = useParams(); // 미팅번호
  const data = {
    meeting_id: 1,
    manager_code: 12323,
    meeting_name: '서강준님 3차 ONLINE FAN MEETING',
    meeting_open_date: '2022-02-11 14:00:00',
    meeting_start_date: '2022-02-18 11:00:00',
    meeting_end_date: '2022-02-18 13:00:00',
    meeting_cnt: 50,
    meeting_price: 100000,
    meeting_description:
      "그룹 2PM 멤버겸 배우 이준호는 오는 22일과 23일 양일간 서울 용산구 블루스퀘어 마스터카드홀에서 오프라인 단독 팬미팅 'JUNHO THE MOMENT' 를 개최한다. 23일에는 오프라인 팬미팅과 함께 비욘드 라이브 플랫폼을 통해 동시 진행되는 온라인 유료  생중계로 월드와이드 팬들과 소통한다.",
    is_approve: 1,
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
            <div id="meeting-name">{data.meeting_name}</div>
          </AdminMeetindDetailHeader>
          <AdminMeetingDetailContent>
            <div id="detail">
              <div id="detail2">
                <TableContainer sx={{ width: '80%' }}>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell width={'30%'}>미팅번호</TableCell>
                        <TableCell>{data.meeting_id}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>멤버코드</TableCell>
                        <TableCell>{data.manager_code}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>예매날짜</TableCell>
                        <TableCell>{data.meeting_open_date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>미팅날짜</TableCell>
                        <TableCell>{data.meeting_start_date}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>관람시간</TableCell>
                        <TableCell>
                          {calcTime(
                            data.meeting_start_date,
                            data.meeting_end_date
                          )}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>인원수</TableCell>
                        <TableCell>{data.meeting_cnt}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>가격</TableCell>
                        <TableCell>{data.meeting_price}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>설명</TableCell>
                        <TableCell>{data.meeting_description}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>이미지</TableCell>
                        <TableCell>김다미포스터</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <AdminMeetingDetailFooter color={data.is_approve}>
                {data.is_approve === 0 ? (
                  <button>등록하기</button>
                ) : (
                  <button disabled="disabled">등록완료</button>
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
