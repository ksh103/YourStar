import React, { useEffect, useState } from 'react';
import Universe from '../../components/Main/Universe';
import MainPoster from '../../components/Main/MainPoster/MainPoster';
import { MainButton, MainSection, MainWrapper } from './Main.style';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MY_PAGE_REQUEST } from '../../store/modules/mypage';
import { APPROVED_MEETINGS_REQUEST } from '../../store/modules/meeting';
import ModalSign from '../../components/utils/modal/modalSign';
import { setSignButton } from '../../store/modules/meetingRoom';
export default function Main() {
  const dispatch = useDispatch();
  const { logInDone } = useSelector(state => state.member);
  const { approvedMeetingsDone } = useSelector(state => state.meeting);

  const [sign, setSign] = useState(false);
  useEffect(() => {
    if (!logInDone && sessionStorage.length > 0) {
      // 만약 토큰이 남아 있다면 or 새로고침 되었을 때 동작하도록 해야함
      dispatch({
        type: MY_PAGE_REQUEST,
      });
    }
    if (!approvedMeetingsDone) {
      dispatch({
        type: APPROVED_MEETINGS_REQUEST,
        data: { page: 1, size: 100 },
      });
    }
  }, [approvedMeetingsDone, dispatch, logInDone]);

  const onSignClick = () => {
    setSign(true);
    dispatch(setSignButton(true));
  };

  return (
    <MainWrapper>
      <Navbar />
      {/* <Universe /> */}
      <button style={{ color: 'white' }} onClick={onSignClick}>
        싸인
      </button>
      {sign && <ModalSign />}
      <MainPoster />
      <MainSection>
        <div className="one"> 당신의 스타를 만나보세요</div>
        <div className="two">
          공연, QnA, 게임, 1:1 미팅 등 스타와 함께하는 <br />
          다양한 팬미팅 컨텐츠, 나만을 위한 스타의 싸인, <br />
          비대면 시대에 새로운 온라인 팬미팅 서비스를 제공합니다
          <br />
        </div>
        <MainButton>
          <button>
            <Link to="/schedule">Meet Star</Link>
          </button>
        </MainButton>
      </MainSection>
      <Footer />
    </MainWrapper>
  );
}
