import styled from '@emotion/styled';
import colors from '../style/colors';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import { Link } from 'react-router-dom';
import { NavBar, Logo, NavContainer } from '../style/styled_components';
import { Checkbox } from 'semantic-ui-react';
import { View } from '../utils/letter_state';

const Div = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Nav = observer(() => {
  const state = useLetterState();

  const isCheched = (): boolean => state?.view === View.double;

  const handelCheckboxToggle = (): void => {
    state?.setView(state.view === View.double ? View.letter : View.double);
  };

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
          <Div>
            <div>
              <h2>Letter </h2>
            </div>
            <Checkbox
              toggle
              checked={isCheched()}
              onChange={handelCheckboxToggle}
            />
            <div>
              <h2> Conjunction</h2>
            </div>
          </Div>
        </NavContainer>
      </NavBar>
    </header>
  );
});

export default Nav;
