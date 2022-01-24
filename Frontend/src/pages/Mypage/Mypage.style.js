import styled from 'styled-components';
import { blockColor, device, pointColor } from '../../styles/variables';

const MypageProfileImgDiv = styled.div`
  width: 15vh;
  height: 15vh;
  border-radius: 70%;
  overflow: hidden;
  position: relative;
  margin: auto;
  top: -50px;
  background-color: white;
  box-shadow: 3px 3px 3px 2px #404040;
`;

const MypageProfileImgTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileTextDiv = styled.div`
  position: relative;
  top: -50px;
  width: 100%;
  height: 100%;
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

const ImageCard = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  box-shadow: 3px 3px 3px 2px #404040;
  border-radius: 20px;
  margin: auto;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

const StarCard = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  box-shadow: 3px 3px 3px 2px #404040;
  border-radius: 20px;
  margin: auto;
  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

const NonStarCard = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  box-shadow: 3px 3px 3px 2px #404040;
  border-radius: 20px;
  margin: auto;
  }
`;

const ScheduleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ScheduleBlock = styled.div`
  max-width: 1200px;
  width: 70%;
  height: 78.5vh;
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  overflow-y: auto;
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

const InFormBlock = styled.div`
  max-width: 800px;
  -ms-overflow-style: none;
  width: 70%;
  height: 78.5vh;
  background-color: ${blockColor};
  border-radius: 10px;
  color: black;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  @media ${device.TabletPortrait} {
    width: 100%;
    border-radius: 0px;
  }
`;

export {
  MypageProfileImgDiv,
  MypageProfileImgTag,
  WhiteBlock,
  ProfileTextDiv,
  ImageCard,
  ScheduleWrapper,
  ScheduleBlock,
  InFormBlock,
  StarCard,
  NonStarCard,
};
