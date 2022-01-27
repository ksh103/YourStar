import React from 'react';
import styled from 'styled-components';

const YelloDiv = styled.div`
  position: absolute;
  top: 10%;
  left: 36%;
  width: 28%;
  height: 35vh;
  border-radius: 3vh;
  background-color: yellow;
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
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

export default function YelloCard() {
  return <YelloDiv></YelloDiv>;
}
