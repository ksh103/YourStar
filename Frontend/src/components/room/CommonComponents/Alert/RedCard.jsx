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
  animation: fadein 4s;
  -moz-animation: fadein 4s;
  -webkit-animation: fadein 4s;
  -o-animation: fadein 4s;
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

export default function RedCard() {
  return <RedDiv></RedDiv>;
}
