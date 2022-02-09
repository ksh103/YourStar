import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/variables';

const Section1 = styled.div`
  padding-left: 2vw;
  margin: 0 auto;
  color: black;
  table {
    width: 100%;
    text-align: left;
  }
  td {
    font-size: 1vw;
    font-weight: bold;
    padding-top: 2.4vh;
  }
  input {
    width: 80%;
    height: 3vh;
  }
  textarea {
    width: 80%;
    height: 15vh;
  }
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
    table {
      width: 100%;
      text-align: left;
    }
    td {
      font-size: 1.8vw;
    }
  }
`;
export default function ApplyInputSection() {
  const [ticketDate, setTicketDate] = React.useState(''); // 선택된 시간 저장
  const [startDate, setStartDate] = React.useState(''); // 선택된 분 저장

  return (
    <>
      <Section1>
        <div>
          <table>
            <tbody>
              <tr>
                <td style={{ width: '28%' }}>예매 시간</td>
                <td>
                  <input type={'datetime-local'}></input>
                </td>
              </tr>
              <tr>
                <td>시작시간</td>
                <td>
                  <input type={'datetime-local'}></input>
                </td>
              </tr>
              <tr>
                <td>종료시간</td>
                <td>
                  <input type={'datetime-local'}></input>
                </td>
              </tr>
              <tr>
                <td>인원</td>
                <td>
                  <input
                    type={'number'}
                    placeholder="입장인원을 입력하세요"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>가격</td>
                <td>
                  <input
                    type={'number'}
                    placeholder="가격을 입력하세요"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>설명</td>
                <td>
                  <textarea placeholder="팬미팅 상세 내용을 작성해주세요"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section1>
    </>
  );
}
