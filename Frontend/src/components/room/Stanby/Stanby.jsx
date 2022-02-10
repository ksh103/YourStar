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
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { changeBackgroundColor } from '../../../store/modules/meetingRoom';

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
  const dispatch = useDispatch();
  const history = useHistory();

  const { meeting } = useSelector(state => state.meeting);

  const [color, SetColor] = useState('#C4C4C4');
  const [video, SetVideo] = useState(0); // 1 ON, 0 OFF
  const [mic, SetMic] = useState(0); // 1 ON, 0 OFF
  const CircleOnclick = props => {
    SetColor(props);
  };

  const onClickEnter = () => {
    // 선택한 컬러 전역으로 저장하기
    dispatch(changeBackgroundColor(color));
    // history.push(`/room/${meeting.id}`);
    history.push(`/EunSeong`);
  };
  useEffect(() => {
    swal(
      '반갑습니다',
      '미팅 대기 페이지에서는 색상을 선택하여 원하는 배경색을 지정할 수 있습니다.',
      'success'
    );
  }, []);
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
            <IoExit onClick={onClickEnter} />
          </SettingIcons>
        </SettingBox>
      </SettingWrapper>
    </BackgroundDiv>
  );
}
