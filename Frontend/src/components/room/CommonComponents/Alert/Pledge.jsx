import React from 'react';
import {
  AlertParentDiv,
  AlertHead,
  ExitIcon,
  HeadTextArea,
  HeadContent,
  AlertBody,
} from './Alert.style';
import { FcLock } from 'react-icons/fc';
import styled from 'styled-components';
import ExitButton from './ExitButton';

const ContentTextArea = styled.div`
  position: absolute;
  top: 6%;
  left: 2%;
  width: 96%;
  height: 70%;
  overflow-y: auto;
  li {
    color: black;
    padding: 1vw;
  }
`;

const ButtonInputArea = styled.div`
  position: absolute;
  left: 2.5%;
  bottom: 4%;
  width: 95%;
  height: 22%;
  input {
    position: relative;
    top: 35%;
    border-radius: 1vh;
    padding-left: 0.52vw;
    padding-right: 0.52vw;
    width: 75%;
    height: 5.1vh;
    font-size: 0.7em;
  }
  button {
    position: relative;
    width: 18%;
    height: 5vh;
    right: -4%;
    top: 35%;
    background: #ff5455;
    border: 0.2vw solid #000000;
    border-radius: 1vw;
  }
`;

const PlaceHolderText = styled.div`
  pointer-events: none;
  position: absolute;
  top: 48.5%;
  border-radius: 1vh;
  padding-left: 0.52vw;
  padding-right: 0.52vw;
  width: 75%;
  height: 5.1vh;
  z-index: 2;
  color: gray;
  font-size: 0.7em;
`;

export default function Pledge() {
  return (
    <AlertParentDiv>
      {/* head 부분 */}
      <AlertHead>
        <ExitIcon>
          <ExitButton></ExitButton>
        </ExitIcon>
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
              임의로 녹화하거나 추출하는 행위, 다수의 시청이 가능한 곳에서의
              스트리밍 행위등은 엄격히 금지하고 있습니다.
            </li>
            <li>
              저작권자의 동의 없이 콘텐츠를 무단 배포 및 가공하는 행위는 저작권
              침해에 해당합니다.
            </li>
            <li>
              저작권자의 동의 없이 콘텐츠를 무단 배포 및 가공하는 행위는 저작권
              침해에 해당합니다.
            </li>
            <li>
              저작권자의 동의 없이 콘텐츠를 무단 배포 및 가공하는 행위는 저작권
              침해에 해당합니다.
            </li>
          </ul>
        </ContentTextArea>
        <ButtonInputArea>
          <input type="text"></input>
          <PlaceHolderText>
            본인은 위 사항을 지킬것을 동의합니다
          </PlaceHolderText>
          <button>제출</button>
        </ButtonInputArea>
      </AlertBody>
    </AlertParentDiv>
  );
}
