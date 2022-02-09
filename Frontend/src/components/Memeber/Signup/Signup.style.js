import styled from 'styled-components';
import { blockColor, device, pointColor } from '../../../styles/variables';

const SignupBlock = styled.div`
  width: 60vh;
  height: 78vh;
  background-color: ${blockColor};
  border-radius: 10px;
  @media ${device.TabletPortrait} {
    border-radius: 0px;
    width: 100%;
    height: 100%;
  }
  #scroll {
    height: 100%;
    margin: 0 8px;
    overflow-y: auto;
    @media ${device.TabletPortrait} {
      margin: 0;
    }
  }
`;

const SignupHeader = styled.div`
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
const SignupContent = styled.div`
  height: 85%;
`;
const SignupContentRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.6em 0;
  .input {
    display: block;
    width: 280px;
    height: 50px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #dfdfdf;
    border: 0;
    border-radius: 4px;
  }
  .check-input {
    width: 200px;
    margin: 0;
  }
  .check-button {
    height: 50px;
    width: 60px;
    border-radius: 4px;
    color: white;
    margin-left: 20px;
    background-color: ${pointColor};
  }
  .signup-button {
    display: block;
    width: 320px;
    height: 50px;
    margin: 12px auto;
    border: 0;
    border-radius: 4px;
    color: white;
    background-color: ${pointColor};
  }
`;

export { SignupBlock, SignupHeader, SignupContent, SignupContentRow };
