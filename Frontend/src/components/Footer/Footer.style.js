import styled from 'styled-components';

const FooterBlock = styled.div`
  display: flex;
  font-size: 18px;
  color: gray;
  height: 10vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .email {
    margin-top: 10px;
    svg {
      margin-top: 4px;
      margin-right: 4px;
    }
    display: flex;
    align-items: center;
  }
`;

export { FooterBlock };
