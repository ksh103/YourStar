import React, { useState } from 'react';
import {
  DetailBlock,
  DetailWrapper,
  Title,
  Image,
  Section1,
  Section2,
  Icon,
} from './Detail.style';
import { Grid } from '@mui/material';
import poster from '../../components/Main/img/서강준포스터.jpg';
import { IoIosArrowBack } from 'react-icons/io';
import HorizonLine from '../../components/Utils/HorizontalLine';
import SubmitButton from '../../components/Utils/SubmitButton';

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
  return (
    <>
      <DetailWrapper>
        <DetailBlock>
          <Grid container>
            <Grid xs={12}>
              <Title>
                <Icon>
                  <IoIosArrowBack />
                </Icon>
                {PosterDetail.이름}
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
                    <tbody>
                      <tr>
                        <td style={{ width: '25%' }}>예매 시작시간</td>
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
                    </tbody>
                  </table>
                </div>
              </Section1>
              <HorizonLine />
              <Grid xs={12}>
                <Section2>
                  <div>{PosterDetail.미팅설명}</div>
                  <SubmitButton name="등록하기"></SubmitButton>
                </Section2>
              </Grid>
            </Grid>
          </Grid>
        </DetailBlock>
      </DetailWrapper>
    </>
  );
}
