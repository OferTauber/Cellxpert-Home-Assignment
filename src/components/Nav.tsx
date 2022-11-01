import styled from '@emotion/styled';
import colors from '../style/colors';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import { Link } from 'react-router-dom';
import { NavBar, Logo, NavContainer } from '../style/styled_components';

const Nav = observer(() => {
  const state = useLetterState();

  const RedSpan = styled.span`
    color: ${colors['emphasis-primary']};
  `;

  return (
    <header>
      <NavBar>
        <NavContainer>
          <Link to="/">
            <Logo>
              Lingui<RedSpan>Statistics</RedSpan>
            </Logo>
          </Link>
        </NavContainer>
      </NavBar>
    </header>
  );
});

export default Nav;
