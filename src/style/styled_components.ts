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
  min-height: calc(100vh - ${NAV_HEIGHT});
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${PHONE}) {
    height: calc(100vh - ${NAV_HEIGHT_S});
  }
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
  height: fit-content;
  min-height: 100vh;
  width: 100vw;
`;

export const Frame = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors['dark-secondary']};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 5px 10px 5px gray;
  color: ${colors.light};
  margin: 20px;
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

export const Hero = styled.div`
  text-align: center;
  color: ${colors['dark-primary']};
  font-size: 1.6rem;
  display: block;

  @media (max-width: ${PHONE}) {
    font-size: 1.3rem;
  }
`;

export const HeroText = styled.p`
  font-size: 0.8em;
  text-align: justify;
`;

export const ChartsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Card = styled.div`
  border: 1px solid gray;
  width: 200px;
  height: 300px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 10px 8px 3px gray;
  margin: 10px;
  font-size: 1.2rem;
  color: ${colors['dark-secondary']};
  position: relative;

  @media (max-width: ${TABLET}) {
    width: 120px;
    font-size: 1rem;
  }
`;

export const HoverNum = styled.div`
  position: relative;
  font-size: 1.6rem;
  top: -175px;
  text-align: center;

  @media (max-width: ${TABLET}) {
    font-size: 1.1rem;
    top: -160px;
  }
`;
