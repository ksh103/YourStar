import styled from 'styled-components';
import { device } from '../../styles/variables';

const NavbarMain = styled.div`
  display: flex;
  margin: 20px;
  @media ${device.TabletPortrait} {
    margin: 15px;
  }
`;
const LeftMenu = styled.div`
  width: 100%;
  display: none;
  font-size: 30px;
  text-align: left;
  @media ${device.TabletPortrait} {
    display: block;
  }
`;
const CenterMenu = styled.div`
  margin-top: 5px;
  text-align: center;
  img {
    width: 230px;
  }
  @media ${device.TabletPortrait} {
    img {
      width: 180px;
    }
  }
`;
const RightMenu = styled.div`
  width: 100%;
  font-size: 17px;
  text-align: right;
  display: block;
  font-size: 20px;
  margin: 5px;
  @media ${device.TabletPortrait} {
    display: none;
  }
`;
const NavbarSubBlock = styled.div`
  display: flex;
  justify-content: center;
  visibility: hidden;
  @media ${device.TabletPortrait} {
    display: none;
  }
`;
const SubMenu = styled.div`
  display: flex;
  justify-content: space-between;
  ul li {
    margin: 0 20px;
    text-align: center;
    float: left;
  }
`;
const NavbarWrapper = styled.div`
  padding-bottom: 30px;
  &:hover ${NavbarSubBlock} {
    visibility: visible;
    animation: ease-out forwards;
  }
`;

export {
  NavbarWrapper,
  NavbarMain,
  CenterMenu,
  LeftMenu,
  RightMenu,
  NavbarSubBlock,
  SubMenu,
};
