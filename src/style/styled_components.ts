import colors from './colors';
import styled from '@emotion/styled';

const TABLET = '780px';
const PHONE = '450px';

const CONTAINER_WIDTH = '1000px';
const NAV_HEIGHT = '50px';

const NAV_HEIGHT_S = '45px';

export const NavBar = styled.nav`
  background-color: ${colors['dark-primary']};
  width: 100%;
  height: ${NAV_HEIGHT};
  color: ${colors.light};
  padding: 0 40px;

  @media (max-width: ${TABLET}) {
    padding: 0 20px;
  }
  @media (max-width: ${PHONE}) {
    height: ${NAV_HEIGHT_S};
    padding: 0 10px;
  }
`;

export const Logo = styled.h1`
  color: ${colors.light};
  text-decoration: none;
  :hover {
    opacity: 0.7;
  }

  @media (max-width: ${TABLET}) {
    font-size: 20px;
  }
  @media (max-width: ${PHONE}) {
    font-size: 15px;
  }
`;

export const NavContainer = styled.div`
  width: ${CONTAINER_WIDTH};
  max-width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BodyContainer = styled.div`
  width: ${CONTAINER_WIDTH};
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Lable = styled.div`
  @media (max-width: ${TABLET}) {
    font-size: 20px;
  }
  @media (max-width: ${PHONE}) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 10px;
  background-color: ${colors.light};
  color: ${colors['emphasis-primary']};
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  border: 1px solid ${colors['emphasis-primary']};
  border-radius: 100px;

  :disabled {
    opacity: 0.7;
    cursor: auto;
  }

  @media (max-width: ${TABLET}) {
    font-size: 12px;
  }
  @media (max-width: ${PHONE}) {
    font-size: 10px;
  }
`;

export const FullHeigtDiv = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

export const Frame = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background-color: ${colors['dark-secondary']};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 5px 10px 5px gray;
  color: ${colors.light};
`;

export const CharInput = styled.input`
  padding: 5px;
  font-size: 2rem;
  width: 35px;
  text-align: center;
  font-family: 'Times New Roman, Times, serif';
  background-color: #f3f3f3;
  border: 2px solid ${colors['emphasis-secondary']};

  :focus {
    border: 3px solid ${colors['emphasis-primary']};
  }
`;
