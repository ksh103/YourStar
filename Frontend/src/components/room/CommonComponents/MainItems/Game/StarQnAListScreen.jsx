import React, { useState }  from 'react';
import styled from 'styled-components';
import OtherScreenAngle from '../OtherScreen/OtherScreenAngle';
import { MainDiv } from '../Main.style';
import { useSelector, useDispatch } from 'react-redux';
import { changeQnAtoggle } from '../../../../../store/modules/meetingRoom';
import swal from 'sweetalert';
// 포지션작업

const StarScreen = styled.div`
  overflow: auto;
  position: relative;
  width: 60.041vw;
  height: 66.5vh;
  background-color: white;
  border-radius: 3.0643vh;
  box-shadow: 0.306vh 0.306vh gray;
`;

const PerScPosition = styled.div`
  position: relative;
  top: 2%;
  left: 4%;
`;

const QnaContents = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: medium;
  backgroundColor : green;
  position: relative;
`;

export default function StarQnAListScreen() {
  const { StarQnAtoggle, QnAList } = useSelector(state => state.MeetingRoom);
  const [starQnaModal, setStarQnaModal] = useState('');

  const dispatch = useDispatch();

  const toggleChange = tf => {
    dispatch(changeQnAtoggle(tf));
  };

//   const changeQnaModalState = qnaContent => {
//     console.log(starQnaModal)
//     console.log(qnaContent)
//     console.log(qnaContent.length)
//     setStarQnaModal(qnaContent);
//     console.log(starQnaModal)
//     // swal({
//     //   text: qnaContent,
//     //   button: "close",
//     //   closeOnClickOutside: false,
//     // }).then(() => {

//     // })
// }

  return (
    <MainDiv>
      <StarScreen>
        <button onClick={() => toggleChange(StarQnAtoggle)}>
          다시 작은화면
        </button>
        {/* {starQnaModal.length > 1 ?(
          // <QnaContents >{starQnaModal}</QnaContents>
          swal({
            text: starQnaModal,
            icon: "info",
            closeOnClickOutside: false,
            })
          ):null} */}
        <PerScPosition>
          {QnAList &&
            QnAList.map((value, idx) => {
              return (
                <OtherScreenAngle
                  key={idx + value.text}
                  text={value.text}
                  // test={() => changeQnaModalState(value.text)}
                ></OtherScreenAngle>
              );
            })}
        </PerScPosition>
      </StarScreen>
    </MainDiv>
  );
}
