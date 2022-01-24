import styled from 'styled-components';

const AdminBlock = styled.div``;
const Title = styled.div`
  font-size: 3vw;
  color: black;
  height: 20vh;
  /* border: solid red; */
  display: flex; // div태그 내 text 수직, 수평정렬
  align-items: center; // div태그 내 text 수직, 수평정렬
  /* justify-content: center; // div태그 내 text 수직, 수평정렬 */
  div {
    padding-left: 2vw;
    text-align: left;
  }
`;
const Image = styled.div`
  height: 69vh;
  color: black;
  /* border: solid red; */
  img {
    padding-top: 2.8vh;
    width: 100%;
  }
`;
const Section1 = styled.div`
  padding-left: 2vw;
  margin: 0 auto;
  height: 34.2vh;
  color: black;
  /* border: solid red; */
  table {
    width: 100%;
    text-align: left;
  }
  td {
    font-size: 1vw;
    font-weight: bold;
    padding-top: 2.8vh;
  }
`;
const Section2 = styled.div`
  height: 34.2vh;
  color: black;
  padding-right: 2vw;
  /* border: solid red; */
  div {
    padding-top: 2.8vh;
    padding-left: 2vw;
    text-align: left;
    font-size: 1vw;
  }
  Button {
    position: relative;
    top: 50%;
    left: 46%;
  }
`;

export { AdminBlock, Title, Image, Section1, Section2 };
