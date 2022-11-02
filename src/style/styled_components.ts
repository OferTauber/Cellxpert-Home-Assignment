import colors from './colors';
import styled from '@emotion/styled';

const CONTAINER_WIDTH = '1000px';
const NAV_HEIGHT = '50px';

export const NavBar = styled.nav`
  background-color: ${colors['dark-primary']};
  width: 100%;
  height: ${NAV_HEIGHT};
  color: ${colors.light};
`;

export const Logo = styled.h1`
  color: ${colors.light};
  text-decoration: none;
  :hover {
    opacity: 0.7;
  }
`;

export const NavContainer = styled.div`
  width: ${CONTAINER_WIDTH};
  max-width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BodyContainer = styled.div`
  width: ${CONTAINER_WIDTH};
  max-width: 100vw;
  min-height: calc(100vh - ${NAV_HEIGHT});
  margin: auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
