import React, { useEffect, useRef, useState } from 'react';
import { ApplyButton, ApplyWrapper } from './Apply.style';
import { Block, Layout, Wrapper } from '../../styles/variables';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { INSERT_MEETING_REQUEST } from '../../store/modules/meeting';
import moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
export default function Apply() {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.mypage);
  const { insertMeetingDone } = useSelector(state => state.meeting);
  const [cnt, setCnt] = useState(null);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [openDate, setOpenDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState(null);
  const imageInput = useRef();

  useEffect(() => {
    if (insertMeetingDone) {
      setName('');
      setDescription('');
      setCnt(null);
      setPrice(null);
      setOpenDate('');
      setStartDate('');
      setEndDate('');
      setImage(null);
    }
  }, [insertMeetingDone]);

  const onCntHandler = e => {
    setCnt(e.target.value);
  };
  const onDescriptionHandler = e => {
    setDescription(e.target.value);
  };
  const onNameHandler = e => {
    setName(e.target.value);
  };
  const onPriceHandler = e => {
    setPrice(e.target.value);
  };
  const onOpenDateHandler = e => {
    setOpenDate(e.target.value);
  };
  const onStartDateHandler = e => {
    setStartDate(e.target.value);
  };
  const onEndDateHandler = e => {
    setEndDate(e.target.value);
  };
  const onImageHandler = e => {
    setImage(e.target.files[0]);
  };
  const createMeeting = () => {
    if (name === '') {
      alert('미팅이름을 입력해주세요');
    } else if (cnt === null) {
      alert('인원수를 입력해주세요');
    } else if (price === null) {
      alert('가격을 입력해주세요');
    } else if (description === '') {
      alert('설명을 입력해주세요');
    } else if (openDate === '') {
      alert('예매시간을 입력해주세요');
    } else if (startDate === '') {
      alert('시작시간을 입력해주세요');
    } else if (endDate === '') {
      alert('끝시간을 입력해주세요');
    } else if (image === null) {
      alert('사진을 등록해주세요');
    } else {
      dispatch({
        type: INSERT_MEETING_REQUEST,
        data: {
          code: me.manageCode,
          name: name,
          price: price,
          cnt: cnt,
          description: description,
          openDate: moment(openDate).format('YYYY-MM-DD HH:mm:ss'),
          startDate: moment(startDate).format('YYYY-MM-DD HH:mm:ss'),
          endDate: moment(endDate).format('YYYY-MM-DD HH:mm:ss'),
          image: imageInput.current.files[0],
        },
      });
    }
  };

  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <ApplyWrapper>
            <div>
              <div className="title">미팅 신청</div>
              <div className="content">
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>미팅이름</TableCell>
                        <TableCell>
                          <input
                            type="text"
                            placeholder="미팅이름을 입력하세요"
                            onChange={onNameHandler}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>예매날짜</TableCell>
                        <TableCell>
                          <input
                            type={'datetime-local'}
                            onChange={onOpenDateHandler}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>시작시간</TableCell>
                        <TableCell>
                          <input
                            type={'datetime-local'}
                            onChange={onStartDateHandler}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>종료시간</TableCell>
                        <TableCell>
                          <input
                            type={'datetime-local'}
                            onChange={onEndDateHandler}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>인원수</TableCell>
                        <TableCell>
                          <input
                            type={'number'}
                            placeholder="인원수를 입력하세요"
                            onChange={onCntHandler}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>가격</TableCell>
                        <TableCell>
                          <input
                            type={'number'}
                            placeholder="가격을 입력하세요"
                            onChange={onPriceHandler}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>설명</TableCell>
                        <TableCell>
                          <textarea
                            placeholder="팬미팅 상세 내용을 작성해주세요"
                            onChange={onDescriptionHandler}
                            rows="4"
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>이미지</TableCell>
                        <TableCell>
                          <input
                            type="file"
                            ref={imageInput}
                            onChange={onImageHandler}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="button">
                <ApplyButton>
                  <button onClick={() => createMeeting()}>신청하기</button>
                </ApplyButton>
              </div>
            </div>
          </ApplyWrapper>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
