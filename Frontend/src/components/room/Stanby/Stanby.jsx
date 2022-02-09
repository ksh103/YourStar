import React, { useState } from 'react';
import { StarScreen } from './Stanby.style';
import { BackgroundDiv } from '../styles/roomGlobal';
import {
  BsFillCircleFill,
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicFill,
  BsFillMicMuteFill,
} from 'react-icons/bs';
import { IoExit } from 'react-icons/io5';
import {
  // StanbyBox,
  ColorCircleBox,
  ColorCircleWrapper,
  SettingWrapper,
  SettingBox,
  SettingIcons,
} from './Stanby.style';
import { roomColor } from '../../../styles/variables';

const ColorCircle = [
  roomColor.gray.background,
  roomColor.green.background,
  roomColor.blue.background,
  roomColor.pink.background,
  roomColor.red.background,
  roomColor.yellow.background,
  roomColor.purple.background,
];

export default function Stanby() {
  const [color, SetColor] = useState('#C4C4C4');
  const [video, SetVideo] = useState(0); // 1 ON, 0 OFF
  const [mic, SetMic] = useState(0); // 1 ON, 0 OFF
  const CircleOnclick = props => {
    SetColor(props);
  };
  return (
    <BackgroundDiv color={color}>
      <ColorCircleWrapper>
        <ColorCircleBox>
          {ColorCircle.map((colorCircle, index) => (
            <BsFillCircleFill
              key={index}
              onClick={() => {
                CircleOnclick(colorCircle);
              }}
              style={{
                color: colorCircle,
                marginLeft: '1vw',
                fontSize: '0.8vw',
                cursor: 'pointer',
              }}
            />
          ))}
        </ColorCircleBox>
      </ColorCircleWrapper>
      <StarScreen></StarScreen>
      <SettingWrapper>
        <SettingBox>
          {video === 0 ? (
            <BsFillCameraVideoOffFill
              style={{ cursor: 'pointer' }}
              onClick={() => {
                SetVideo(1);
              }}
            />
          ) : (
            <BsFillCameraVideoFill
              style={{ cursor: 'pointer' }}
              onClick={() => {
                SetVideo(0);
              }}
            />
          )}
          <SettingIcons>
            {mic === 0 ? (
              <BsFillMicMuteFill
                onClick={() => {
                  SetMic(1);
                }}
              />
            ) : (
              <BsFillMicFill
                onClick={() => {
                  SetMic(0);
                }}
              />
            )}
          </SettingIcons>
          <SettingIcons>
            <IoExit />
          </SettingIcons>
        </SettingBox>
      </SettingWrapper>
    </BackgroundDiv>
  );
}
