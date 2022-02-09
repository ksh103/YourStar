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

import ExitButton from './ExitButton';
import YelloCard from './YelloCard';
import RedCard from './RedCard';

export default function Warning() {
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
          <HeadContent style={{ fontSize: '2vw' }}>경고창</HeadContent>
        </HeadTextArea>
      </AlertHead>
      {/* 내용물 */}
      <AlertBody>
        <YelloCard></YelloCard>
      </AlertBody>
    </AlertParentDiv>
  );
}
