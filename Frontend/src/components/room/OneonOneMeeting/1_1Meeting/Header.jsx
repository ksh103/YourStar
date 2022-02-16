import React, { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Timer from '../../Timer/Timer';
import styled from 'styled-components';
import { IoIosAlarm, IoMdCreate, IoIosAperture } from 'react-icons/io';
import axios from 'axios';
import swal from 'sweetalert';
import { setSignButton } from '../../../../store/modules/meetingRoom';
import ModalSign from '../../../utils/modal/modalSign';
import {
  HeaderBox,
  SmallIconWrapper,
  SmallWrapper,
  StarBox,
  UserBox,
} from './Header.style';

export default function Header(props) {
  const [prevIdx, setPrevIdx] = useState(-1);
  const [prevCnt, setPrevCnt] = useState(-1);
  const { me } = useSelector(state => state.mypage);
  const { index, storeSession, subscribers, onebyoneStream, checkCnt } =
    useSelector(state => ({
      index: state.MeetingRoom.index,
      storeSession: state.MeetingRoom.storeSession,
      subscribers: state.MeetingRoom.subscribers,
      onebyoneStream: state.MeetingRoom.onebyoneStream,
      checkCnt: state.MeetingRoom.checkCnt,
    }));

  const OPENVIDU_SERVER_URL = 'https://i6e204.p.ssafy.io:8443';
  const OPENVIDU_SERVER_SECRET = 'YOURSTAR';

  const signalToNextUser = idx => {
    setPrevIdx(idx);

    // 다음 사람에게 남은 시간 알리기
    if (idx < subscribers.length - 1) {
      for (let i = idx + 1, order = 1; i < subscribers.length; i++, order++) {
        const sessionId = storeSession.sessionId;
        const data = {
          session: sessionId.substring(0, sessionId.length - 9), // 1-onebyone 일때 1만 뽑아내기
          to: [subscribers[i].stream.connection.connectionId],
          type: 'signal:userwait',
          data: String(order),
        };
        axios
          .post(OPENVIDU_SERVER_URL + '/openvidu/api/signal', data, {
            headers: {
              Authorization:
                'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
              'Content-Type': 'application/json',
            },
          })
          .then(response => {
            console.log(response);
          })
          .catch(error => console.error(error));
      }
    }

    // 다음 사람 데려오기
    if (idx < subscribers.length) {
      const sessionId = storeSession.sessionId;
      const data = {
        session: sessionId.substring(0, sessionId.length - 9), // 1-onebyone 일때 1만 뽑아내기
        to: [subscribers[idx].stream.connection.connectionId],
        type: 'signal:one',
        data: '6',
      };
      axios
        .post(OPENVIDU_SERVER_URL + '/openvidu/api/signal', data, {
          headers: {
            Authorization:
              'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => console.error(error));
    }

    // 스타 돌려 보내기
    if (idx >= subscribers.length) {
      const sessionId = storeSession.sessionId;

      const data = {
        session: sessionId,
        to: [storeSession.connection.connectionId],
        type: 'signal:starback',
        data: '0',
      };
      axios
        .post(OPENVIDU_SERVER_URL + '/openvidu/api/signal', data, {
          headers: {
            Authorization:
              'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => console.error(error));
    }
  };

  const signalToCurUserOut = () => {
    // 스타 퇴장 알림
    if (index === subscribers.length) {
      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: '미팅룸 이동 알림',
        text: '대기 시간 이후 미팅룸으로 자동 이동됩니다',
        icon: 'info',
        buttons: false,
        timer: 5000,
      });
    }

    // 다시 이전 세션으로 보내기
    setPrevCnt(checkCnt);
    const sessionId = storeSession.sessionId;

    const data = {
      session: sessionId,
      to: [onebyoneStream.stream.connection.connectionId],
      type: 'signal:oneback',
      data: '0',
    };
    axios
      .post(OPENVIDU_SERVER_URL + '/openvidu/api/signal', data, {
        headers: {
          Authorization:
            'Basic ' + btoa('OPENVIDUAPP:' + OPENVIDU_SERVER_SECRET),
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  };
  const dispatch = useDispatch();
  const { signButton } = useSelector(state => state.MeetingRoom);

  const onSignClick = () => {
    storeSession.signal({
      data: '0',
      to: [],
      type: 'signon',
    });
    dispatch(setSignButton(true));
  };
  return (
    <SmallWrapper>
      <Timer userNick={props.userNick} />
      {me.code !== 3 && (
        <SmallIconWrapper>
          {prevIdx !== index ? signalToNextUser(index) : null}
          {prevCnt !== checkCnt ? signalToCurUserOut() : null}
          <IoMdCreate onClick={() => onSignClick()} />
          <IoIosAperture />
          {signButton && <ModalSign />}
        </SmallIconWrapper>
      )}
    </SmallWrapper>
    // <HeaderBox>
    //   {/* 일반 유저 */}
    //   {me.code === 3 && (
    //     <UserBox>
    //       <div>
    //         <IoIosAlarm
    //           style={{
    //             float: 'left',
    //             marginRight: '20px',
    //             marginTop: '12px',
    //           }}
    //         />
    //         <Timer style={{ float: 'left' }} />
    //       </div>
    //     </UserBox>
    //   )}
    //   {/* 스타 */}
    //   {me.code !== 3 && (
    //     <StarBox>gdbcbc</StarBox>
    // <>
    //   <StarBox>
    //     <div>
    //       <IoIosAlarm
    //         style={{
    //           float: 'left',
    //           marginRight: '20px',
    //           marginTop: '12px',
    //         }}
    //       />
    //       <Timer style={{ float: 'left' }} />
    //       {prevIdx !== index ? signalToNextUser(index) : null}
    //       {prevCnt !== checkCnt ? signalToCurUserOut() : null}
    //     </div>
    //     <SignIcon>
    //       <IoMdCreate onClick={() => onSignClick()} />
    //     </SignIcon>
    //     {signButton && <ModalSign />}
    //     <CaptureIcon>
    //       <IoIosAperture />
    //     </CaptureIcon>
    //   </StarBox>
    // </>
    //     )}
    //   </HeaderBox>
  );
}
