import { Grid } from '@mui/material';
import React, { useState } from 'react';
import UploadButton from '../../components/Apply/UploadButton';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';
import { IoIosAddCircleOutline } from 'react-icons/io';
import {
  UploadImage,
  InputData,
  ApplyButton,
  Section1,
  ApplyHeadBlock,
  Input,
} from './Apply.style';
import { Block, Layout, pointColor, Wrapper } from '../../styles/variables';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { INSERT_MEETING_REQUEST } from '../../store/modules/meeting';
export default function Apply() {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.mypage);
  const [cnt, setCnt] = useState(null);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [openDate, setOpenDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setendDate] = useState('');

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
    setendDate(e.target.value);
  };
  const createMeeting = () => {
    if (name === '') {
      alert('이메일을 입력해주세요');
    } else if (cnt === null) {
      alert('이메일을 입력해주세요');
    } else if (price === null) {
      alert('이메일을 입력해주세요');
    } else if (description === '') {
      alert('이메일을 입력해주세요');
    } else if (openDate === '') {
      alert('이메일을 입력해주세요');
    } else if (startDate === '') {
      alert('이메일을 입력해주세요');
    } else if (endDate === '') {
      alert('이메일을 입력해주세요');
    } else {
      dispatch({
        type: INSERT_MEETING_REQUEST,
        data: {
          code: me.ManagerCode,
          name: name,
          price: price,
          cnt: cnt,
          description: description,
        },
      });
    }
  };
  return (
    <Layout>
      <Navbar />
      <Wrapper>
        <Block>
          <Grid container>
            <Grid xs={12}>
              <ApplyHeadBlock>
                <TextField
                  placeholder="미팅 제목을 입력해주세요"
                  variant="outlined"
                  onChange={onNameHandler}
                  sx={{ width: '100%' }}
                />
              </ApplyHeadBlock>
            </Grid>
            <Grid xs={4}>
              <UploadImage>
                <div>
                  <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                      style={{ color: pointColor }}
                      aria-label="upload picture"
                      component="span"
                    >
                      <IoIosAddCircleOutline size={'40px'} />
                    </IconButton>
                  </label>
                </div>
              </UploadImage>
            </Grid>
            <Grid xs={8}>
              <InputData>
                <div>
                  <Section1>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{ width: '28%' }}>예매 시간</td>
                            <td>
                              <input
                                type={'datetime-local'}
                                onChange={onOpenDateHandler}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>시작시간</td>
                            <td>
                              <input
                                type={'datetime-local'}
                                onChange={onStartDateHandler}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>종료시간</td>
                            <td>
                              <input
                                type={'datetime-local'}
                                onChange={onEndDateHandler}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>인원</td>
                            <td>
                              <input
                                type={'number'}
                                placeholder="입장인원을 입력하세요"
                                onChange={onCntHandler}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>가격</td>
                            <td>
                              <input
                                type={'number'}
                                placeholder="가격을 입력하세요"
                                onChange={onPriceHandler}
                              ></input>
                            </td>
                          </tr>
                          <tr>
                            <td>설명</td>
                            <td>
                              <textarea
                                placeholder="팬미팅 상세 내용을 작성해주세요"
                                onChange={onDescriptionHandler}
                              ></textarea>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Section1>
                </div>
              </InputData>
              <ApplyButton>
                <button onClick={() => createMeeting()}>신청하기</button>
              </ApplyButton>
            </Grid>
          </Grid>
        </Block>
      </Wrapper>
      <Footer />
    </Layout>
  );
}
