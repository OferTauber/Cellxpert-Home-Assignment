import React from 'react';
import {
  countWordsContainingletter,
  countWordsStartsWithletter,
} from '../utils/calcs';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import ChartBox from './chart_box/ChartBox';
import { BodyContainer } from '../style/styled_components';

const LetterView = observer(() => {
  const state = useLetterState();

  return (
    <BodyContainer>
      <ChartBox
        letter={state?.letter || ''}
        callback={countWordsContainingletter}
        massage="this is a massage"
      />
      <ChartBox
        letter={state?.letter || ''}
        callback={countWordsStartsWithletter}
        massage="this is a massage"
      />
    </BodyContainer>
  );
});

export default LetterView;
