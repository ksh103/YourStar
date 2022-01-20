import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { device } from '../../styles/variables';

const NavbarWrapper = styled.div`
  border: 2px solid blue;
  display: flex;
  justify-content: space-between;
  font-size: 22px;
`;
const LeftMenu = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
const RightMenu = styled.div`
  display: block;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.div`
  border: 2px solid red;
  display: inline-block;
  img {
    width: 230px;
  }
  @media (max-width: 480px) {
    img {
      width: 150px;
    }
  }
`;
const GridBlock = styled(Grid)`
  border: 2px solid white;
  display: flex;
  justify-content: space-around;
`;
export { NavbarWrapper, Logo, LeftMenu, RightMenu, GridBlock };

// flex-start
// flex-end
// center
