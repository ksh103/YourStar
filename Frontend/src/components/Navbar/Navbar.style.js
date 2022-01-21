import styled from 'styled-components';
import Grid from '@mui/material/Grid';
//import { device } from '../../styles/variables';

const NavbarWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  @media (max-width: 500px) {
    padding: 15px;
  }
`;
const LeftMenu = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 500px) {
    display: flex;
  }
`;
const RightMenu = styled.div`
  width: 100%;
  font-size: 17px;
  display: block;
  ul li {
    list-style: none;
    float: right;
    margin: 0 15px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const CenterMenu = styled.div`
  display: inline-block;
  img {
    width: 230px;
  }
  @media (max-width: 480px) {
    img {
      width: 180px;
    }
  }
`;
const GridBlock = styled(Grid)`
  display: flex;
  justify-content: space-around;
`;
export { NavbarWrapper, CenterMenu, LeftMenu, RightMenu, GridBlock };
