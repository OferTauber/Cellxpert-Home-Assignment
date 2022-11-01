import colors from './colors';
import styled from '@emotion/styled';

export const NavBar = styled.nav`
  background-color: ${colors['dark-primary']};
  width: 100%;
  height: 50px;
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
  width: 1000px;
  max-width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BodyContainer = styled.div`
  width: 1000px;
  max-width: 100vw;
  height: 100%;
  margin: auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
