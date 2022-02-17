import React from 'react';
import styled from 'styled-components';

const RedDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 36%;
  width: 28%;
  height: 35vh;
  border-radius: 3vh;
  background-color: red;
  animation: fadein 0.5s;
  -moz-animation: fadein 0.5s;
  -webkit-animation: fadein 0.5s;
  -o-animation: fadein 0.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const WarningComment = styled.div`
  position: absolute;
`

export default function RedCard() {
  return (
    <div>
      <RedDiv></RedDiv>
      <WarningComment>
        <p>부적절한 행위 및 언행으로 경고 2회를 받으셨습니다.</p>
        <p>10초 뒤 팬미팅에서 자동으로 나가게 되며, 재입장이 불가합니다.</p>
      </WarningComment>
    </div>);
}
