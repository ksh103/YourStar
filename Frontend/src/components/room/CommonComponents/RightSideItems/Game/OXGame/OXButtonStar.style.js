import styled from 'styled-components';
// const OButton = styled.div`
//   position: absolute;
//   background-color: #2525ff;
//   top: 2vh;
//   left: 0.8vw;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 4vw;
//   border-radius: 1vw;
//   height: 13vh;
//   width: 18vw;
// `;
// const XButton = styled.div`
//   position: absolute;
//   background-color: #ff2525;
//   bottom: 2vh;
//   left: 0.8vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 4vw;
//   cursor: pointer;
//   border-radius: 1vw;
//   height: 13vh;
//   width: 18vw;
// `;
const ButtonDiv = styled.div`
position: absolute;
  top: 50vh;
  left: -17vw;
  z-index: 99;
  display: flex;
  div {
    background-color: #f5f5f5;
    border-radius: 1vh;
    padding: 10px;
    border: 2px solid ${props => props.color};
    margin: 2px;
    &:active {
      -webkit-transform: scale(0.9, 0.9);
      -moz-transform: scale(0.9, 0.9);
      -ms-transform: scale(0.9, 0.9);
      -o-transform: scale(0.9, 0.9);
      transform: scale(0.9, 0.9);
    }
    &:hover{
      background-color: ${props => props.color};
  }
`

const BigBoxOXGame = styled.div`
  position: relative;
  width: 20vw;
  height: 36vh;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RecogButtonDiv = styled.div`
  // background-color: #f5f5f5;
  border-radius: 1vw;
  padding: 10px;
  margin-bottom: 2vh;
  font-size: 1.4vw;
  text-align: center;
`;

const SmallBoxOXGame = styled.div`
  display: flex;
  
  img{
    width:50%;
    display: block;
    cursor: pointer;
  }
`;

const ImgBoxO = styled.img`
  &:hover{
    background-color: green;
  }
`;

const ImgBoxX = styled.img`
  &:hover{
    background-color: red;
  }
`;

export {RecogButtonDiv,ImgBoxO,ImgBoxX, SmallBoxOXGame, BigBoxOXGame, ButtonDiv};