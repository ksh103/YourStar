import React from 'react';
import {
  AlertParentDiv,
  AlertHead,
  HeadTextArea,
  HeadContent,
  AlertBody,
} from './Alert.style';
import { FcLock } from 'react-icons/fc';
import {
  PlaceHolderText,
  ButtonInputArea,
  ContentTextArea,
} from './Alert.style';
import swal from 'sweetalert';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

export default function Pledge(props) {
  const history = useHistory();

  const { meeting } = useSelector(state => state.meeting);
  const [message, setMessage] = useState('');

  const onClicksubmit = () => {
    if (message === '본인은 위 사항을 지킬것을 동의합니다') {
      swal(
        '서약서 제출이 완료되었습니다',
        '미팅 대기 페이지로 이동합니다.',
        'success',
        {
          buttons: false,
          timer: 1800,
        }
      );
      history.push(`/stanby/${meeting.id}`); // 미팅 대기화면으로 이동
    } else {
      swal('', '서약서 서명이 일치하지 않습니다.', 'error', {
        buttons: false,
        timer: 1800,
      });
    }
  };

  return (
    <AlertParentDiv>
      {/* head 부분 */}
      <AlertHead>
        <HeadTextArea>
          <HeadContent>
            <FcLock style={{ fontSize: '3vw' }}></FcLock>
          </HeadContent>
          <HeadContent style={{ fontSize: '2vw' }}>보안 서약서</HeadContent>
        </HeadTextArea>
      </AlertHead>
      {/* 내용물 */}
      <AlertBody>
        <ContentTextArea>
          <ul>
            <li>
              공식 시청 페이지에서 시청하는 방법 이외에, 해당 스트리밍 영상을
              임의로 녹화하거나 추출하는 행위, <br />
              다수의 시청이 가능한 곳에서의 스트리밍 행위등은 엄격히 금지하고
              있습니다.
            </li>
            <li>
              티켓 구매자의 재생 환경 및 네트워크 환경 장애로 인해 발생하는
              문제(끊김, 관람이 되지 않는 현상 등)로
              <br /> 인한 환불이 불가하니 공연 전 재생 지원 환경을 반드시 확인
              바랍니다.
            </li>
            <li>
              저작권자의 동의 없이 콘텐츠를 무단 배포 및 가공하는 행위는 저작권
              침해에 해당합니다.
            </li>
            <li>
              위와 같이 금지된 행위가 적발될 경우, 저작권 침해에 의한 법적인
              제재를 받으실 수 있습니다.
            </li>
          </ul>
        </ContentTextArea>
        <ButtonInputArea>
          <input
            type="text"
            onChange={e => {
              setMessage(e.target.value);
            }}
          ></input>
          <PlaceHolderText>
            본인은 위 사항을 지킬것을 동의합니다
          </PlaceHolderText>
          <button onClick={onClicksubmit} style={{ fontSize: '20px' }}>
            제출
          </button>
        </ButtonInputArea>
      </AlertBody>
    </AlertParentDiv>
  );
}
