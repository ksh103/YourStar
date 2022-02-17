import styled from 'styled-components';

const ScheduleListBox = styled.div`
  background-color: ${props => props.color};
  font-size: 18px;
  font-weight: ${props => (props.check === '1' ? 'bold' : 'none')};
  color: ${props => (props.check === '1' ? 'black' : 'gray')};
  border-radius: 20px;
  width: 95%;
  padding: 11px 0;
  margin: 12px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: black;
    font-weight: bold;
  }
`;
const ScheduleListWrapper = styled.div`
  border-radius: 1vh;
  position: absolute;
  margin: 1.3vh 1vw;
  width: 18vw;
  height: 90%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d2d0d0;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

export { ScheduleListBox, ScheduleListWrapper };
