import styled from 'styled-components';
import { device } from '../../../styles/variables';
const MypageDetailWrapper = styled.div`
  height: 100%;
  height: 100%;
  margin: 0 8px;
  overflow-y: auto;
  @media ${device.TabletPortrait} {
    margin: 0;
  }
`;
const MypageDetailHeader = styled.div`
  height: 12%;
  display: flex;
  align-items: center;
  font-size: 1.5em;
  #back-icon {
    margin: 0 20px;
    cursor: pointer;
  }
`;
const MypageDetailContent = styled.div`
  height: 88%;
  #scroll {
    height: 100%;
    margin: 0 8px;
    overflow-y: auto;
    @media ${device.TabletPortrait} {
      margin: 0;
    }
  }
`;
export { MypageDetailWrapper, MypageDetailHeader, MypageDetailContent };
