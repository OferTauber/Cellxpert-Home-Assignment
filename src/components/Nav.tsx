import styled from '@emotion/styled';
import colors from '../style/colors';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import { Link } from 'react-router-dom';
import { NavBar, Logo, NavContainer, Button } from '../style/styled_components';
import { View } from '../utils/letter_state';

const FlexDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

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
          <FlexDiv>
            <Button
              disabled={state?.view !== View.double}
              onClick={() => {
                state?.setView(View.letter);
              }}
            >
              Letter
            </Button>
            <Button
              disabled={state?.view !== View.letter}
              onClick={() => {
                state?.setView(View.double);
              }}
            >
              Conjunction
            </Button>
          </FlexDiv>
        </NavContainer>
      </NavBar>
    </header>
  );
});

export default Nav;
