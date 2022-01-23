import React, { useState } from 'react';
import { AdminBlock, Title, Image, Section1, Section2 } from './Admin.style';
import { Block } from '../../styles/variables';
import { Button, Grid } from '@mui/material';
import poster from '../../components/Main/img/서강준포스터.jpg';
import { IoIosArrowBack } from 'react-icons/io';
import HorizonLine from '../../components/Utils/HorizontalLine';

export default function Admin() {
  const [PosterDetail, SetPosterDetail] = useState({
    미팅id: 1,
    소속코드: 12323,
    이름: '서강준님 3차 ONLINE FAN MEETING',
    예매시작시간: '2022/02/11 6pm',
    날짜: '2022/02/18 2pm',
    종료시간: '2022/02/18 6pm',
    인원: 50,
    가격: 100000,
    미팅설명:
      "그룹 2PM 멤버겸 배우 이준호는 오는 22일과 23일 양일간 서울 용산구 블루스퀘어 마스터카드홀에서 오프라인 단독 팬미팅 'JUNHO THE MOMENT' 를 개최한다. 23일에는 오프라인 팬미팅과 함께 비욘드 라이브 플랫폼을 통해 동시 진행되는 온라인 유료  생중계로 월드와이드 팬들과 소통한다.",
    팬미팅승인상태: true,
  });
  console.log({ PosterDetail });
  return (
    <>
      <AdminBlock>
        <Block>
          <Grid container>
            <Grid xs={12}>
              <Title>
                <div>
                  <IoIosArrowBack size="50" /> {PosterDetail.이름}
                </div>
              </Title>
              <HorizonLine />
            </Grid>
            <Grid xs={4}>
              <Image>
                <div>
                  <img src={poster} alt="poster"></img>
                </div>
              </Image>
            </Grid>
            <Grid xs={8}>
              <Section1>
                <div>
                  <table>
                    <tr>
                      <td>예매 시작시간</td>
                      <td>{PosterDetail.예매시작시간}</td>
                    </tr>
                    <tr>
                      <td>날짜</td>
                      <td>{PosterDetail.날짜}</td>
                    </tr>
                    <tr>
                      <td>관람시간</td>
                      <td>
                        {PosterDetail.날짜} ~ {PosterDetail.종료시간}
                      </td>
                    </tr>
                    <tr>
                      <td>인원</td>
                      <td>{PosterDetail.인원} 명</td>
                    </tr>
                    <tr>
                      <td>가격</td>
                      <td>{PosterDetail.가격} 원</td>
                    </tr>
                  </table>
                </div>
              </Section1>
              <HorizonLine />
              <Grid xs={12}>
                <Section2>
                  <div>{PosterDetail.미팅설명}</div>
                  <Button
                    variant="contained"
                    sx={{
                      width: '100px',
                      height: '40px',
                    }}
                  >
                    등록하기
                  </Button>
                </Section2>
              </Grid>
            </Grid>
          </Grid>
        </Block>
      </AdminBlock>
    </>
  );
}
