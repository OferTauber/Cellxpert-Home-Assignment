import styled from '@emotion/styled';
import colors from '../style/colors';
import { spaceBetween } from '../style/css_snipits';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import { Link } from 'react-router-dom';

const Nav = observer(() => {
  const state = useLetterState();

  const NavBar = styled.nav`
    background-color: ${colors['dark-primary']};
    width: 100%;
    height: 50px;
    ${spaceBetween}
    color: ${colors.light};
    padding: 0 40px;
  `;

  const Logo = styled.h1`
    color: ${colors.light};
    text-decoration: none;
    :hover {
      opacity: 0.7;
    }
  `;

  const RedSpan = styled.span`
    color: ${colors['emphasis-primary']};
  `;

  return (
    <header>
      <NavBar>
        <div className="nav-item logo">
          <Link to="/">
            <Logo>
              Lingui<RedSpan>Statistics</RedSpan>
            </Logo>
          </Link>
        </div>
        <div></div>
      </NavBar>
      <div>{state?.view}</div>
    </header>
  );
});

export default Nav;
