import styled from 'styled-components';
import { pointColor } from '../../styles/variables';

const PayWrapper = styled.div`
  witdh: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PayBlock = styled.div`
  .desc {
    font-size: 20px;
  }
  .button {
    text-align: center;
    background-color: 'red';
    padding: 20px 10px;
    margin-top: 40px;
    color: white;
    border-radius: 10px;
    background-color: ${pointColor};
  }
`;

export { PayWrapper, PayBlock };
