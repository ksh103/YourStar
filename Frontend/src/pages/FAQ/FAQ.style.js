import styled from 'styled-components';
import { blockColor, device } from '../../styles/variables';

const ScheduleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ScheduleBlock = styled.div`
  max-width: 1200px;
  width: 70%;
  height: 78.5vh;
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  overflow-y: auto;
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

const FAQHeader = styled.div`
  height: 15%;
  font-size: 1.3em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
const FAQContent = styled.div`
  height: 85%;
  #faq {
    height: 100%;
    margin: 0 10px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    @media ${device.TabletPortrait} {
      margin: 0;
    }
  }
  #faq #faq2 {
    width: 70%;
  }
`;
const FAQContentRow = styled.div`
  margin-bottom: 10px;
`;

export { ScheduleBlock, ScheduleWrapper, FAQHeader, FAQContent, FAQContentRow };
