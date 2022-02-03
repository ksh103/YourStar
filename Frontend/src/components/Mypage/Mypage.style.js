import styled from 'styled-components';
import { blockColor, device, pointColor } from '../../styles/variables';

const MypageProfileWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid gray;
  max-width: 800px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  @media ${device.TabletPortrait} {
    padding: 10px;
  }
`;
const MypageProfileBlock = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.TabletPortrait} {
    flex-direction: column;
  }
  #profileIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }
  #profileNickname {
    font-weight: bold;
    font-size: 1.5em;
    margin: 5px;
  }
  #profileEmail {
    font-size: 1em;
    margin: 5px;
  }
`;

const MypageIconBlock = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 30px;
  border-radius: 50%;
  background-color: ${blockColor};
`;
const MypageProfileButton = styled.div`
  margin: 5px;
  button {
    background-color: ${pointColor};
    border-radius: 5px;
    color: white;
  }
`;
const MypageMenuWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 10%;
  ul li {
    cursor: pointer;
    margin: 0 15px;
    float: left;
    padding-bottom: 4px;
    border-bottom: 2px solid
      ${props => (props.check === 1 ? pointColor : 'none')};
    @media ${device.TabletPortrait} {
    }
  }
`;

export {
  MypageMenuWrapper,
  MypageProfileWrapper,
  MypageIconBlock,
  MypageProfileBlock,
  MypageProfileButton,
};
