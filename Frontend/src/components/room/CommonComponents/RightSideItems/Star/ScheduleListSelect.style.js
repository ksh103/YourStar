import styled from 'styled-components';

const ScheduleListBox = styled.div`
  background-color: ${props => props.color};
  font-weight: ${props => (props.check === '1' ? 'bold' : 'none')};
  color: ${props => (props.check === '1' ? 'black' : 'gray')};
  border-radius: 20px;
  width: 95%;
  padding: 10px 0;
  margin: 12px 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ScheduleListWrapper = styled.div`
  border-radius: 1vw;
  position: absolute;
  top: 2vh;
  left: 0.8vw;
  width: 18vw;
  height: 28vh;
  overflow-y: auto;
`;

export { ScheduleListBox, ScheduleListWrapper };
