import styled from 'styled-components';
import { device, pointColor } from '../../styles/variables';

const ApplyButton = styled.div`
  margin-right: 3vw;
  text-align: center;
  button {
    width: 100px;
    height: 40px;
    color: white;
    background-color: ${pointColor};
    border-radius: 10px;
  }
`;
const ApplyWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10px;
  height: 100%;
  overflow-y: auto;
  @media ${device.TabletPortrait} {
    margin: 0;
  }
  & > div {
    width: 70%;
    @media ${device.TabletPortrait} {
      width: 100%;
    }
  }
  .title {
    text-align: center;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
  }
  .content {
    padding: 10px 20px;
    background-color: white;
    border-radius: 10px;
  }
  .button {
    padding: 20px;
  }
  input,
  textarea {
    font-size: 15px;
    padding: 5px;
    width: 100%;
  }
`;

export { ApplyWrapper, ApplyButton };
