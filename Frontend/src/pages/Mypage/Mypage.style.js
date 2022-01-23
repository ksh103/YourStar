import styled from 'styled-components';

const MypageProfileImgDiv = styled.div`
  width: 20vh;
  height: 20vh;
  border-radius: 70%;
  overflow: hidden;
  position: relative;
  margin: auto;
  top: -50px;
`;

const MypageProfileImgTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileTextDiv = styled.div`
  position: relative;
  top: -50px;
`;

const WhiteBlock = styled.div`
  width: 90%;
  height: 45%;
  background-color: white;
  margin: auto;
  margin-top: 60px;
  border-radius: 30px;
  box-shadow: 3px 3px 3px 2px #404040;
`;

export { MypageProfileImgDiv, MypageProfileImgTag, WhiteBlock, ProfileTextDiv };
