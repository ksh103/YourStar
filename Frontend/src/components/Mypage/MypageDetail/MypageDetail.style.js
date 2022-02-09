import styled from 'styled-components';
import { device, pointColor } from '../../../styles/variables';
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
const UserModifyHeader = styled.div`
  height: 20%;
  #title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    font-size: 2em;
    font-weight: bold;
    color: ${pointColor};
  }
  #word {
    text-align: center;
    color: black;
    font-size: 15px;
  }
`;
const MypageDetailContent = styled.div`
  height: 60%;
  #scroll {
    height: 100%;
    margin: 0 8px;
    overflow-y: auto;
    @media ${device.TabletPortrait} {
      margin: 0;
    }
  }
`;
export {
  MypageDetailWrapper,
  MypageDetailHeader,
  MypageDetailContent,
  UserModifyHeader,
};
