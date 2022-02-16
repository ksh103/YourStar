import { pointColor } from '../../../../styles/variables';
import styled from 'styled-components';
const HeaderBox = styled.div`
  /* margin-bottom: 3vh;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center; */
  border: 3px solid red;
  width: 100%;
  height: 100%;
`;

const UserBox = styled.div`
  border: 3px solid red;
  font-size: 3vw;
  width: 12vw;
`;

const StarBox = styled.div`
  /* width: 100%;
  height: 100%;
  border: 1px solid red;*/
`;

const SignIcon = styled.div`
  /* position: absolute;
  left: 67.7vw; */
  font-size: 2vw;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    color: ${pointColor};
  }
`;
const CaptureIcon = styled.div`
  /* position: absolute;
  left: 1350px; */
  font-size: 2vw;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    color: ${pointColor};
  }
`;
const SmallWrapper = styled.div`
  height: 100%;
  width: 100%;
  .time {
    padding: 10px;
    font-size: 3em;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .state {
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
  }
`;
const SmallIconWrapper = styled.div`
  font-size: 3em;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 30%;
  svg {
    cursor: pointer;
    margin: 20px;
  }
`;
export { SmallWrapper, SmallIconWrapper };
