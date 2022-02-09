import styled from 'styled-components';
import { device, pointColor } from '../../styles/variables';

const ApplyButton = styled.div`
  margin-right: 3vw;
  text-align: center;
  button {
    width: 160px;
    height: 60px;
    font-size: 20px;
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
  .apply {
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
    padding: 30px;
  }
  input,
  textarea {
    font-size: 20px;
    width: 80%;
    padding: 5px;
  }
`;

export { ApplyWrapper, ApplyButton };
