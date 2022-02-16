import styled from 'styled-components';

const SmallWrapper = styled.div`
  height: 100%;
  width: 100%;
  .time {
    padding: 10px;
    font-size: 3em;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .state {
    padding: 10px;
    text-align: center;
    font-size: 1.5em;
  }
`;
const SmallIconWrapper = styled.div`
  font-size: 3em;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 30%;
  svg {
    cursor: pointer;
    margin: 20px;
  }
`;
export { SmallWrapper, SmallIconWrapper };
