import {
  countWordsContainingletter,
  countWordsStartsWithletter,
} from '../utils/calcs';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import ChartBox from './chart_box/ChartBox';
import { BodyContainer } from '../style/styled_components';
import colors from '../style/colors';
import { View } from '../utils/letter_state';
import { Navigate } from 'react-router-dom';

const LetterView = observer(() => {
  const state = useLetterState();

  if (state?.view === View.double) return <Navigate to="/double" />;

  return (
    <BodyContainer>
      <ChartBox
        letter={state?.letter || ''}
        callback={countWordsContainingletter}
        massage={['aaa', 'bbb']}
        color={colors['dark-secondary']}
      />
      <ChartBox
        letter={state?.letter || ''}
        callback={countWordsStartsWithletter}
        massage={['aaa', 'bbb']}
        color={colors['emphasis-primary']}
      />
    </BodyContainer>
  );
});

export default LetterView;
