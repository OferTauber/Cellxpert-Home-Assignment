import React from 'react';
import { countWordsContainingletter } from '../utils/calcs';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import ChartBox from './ChartBox';

const LetterView = observer(() => {
  const state = useLetterState();

  return (
    <>
      <ChartBox
        letter={state?.letter || ''}
        callback={countWordsContainingletter}
      />
    </>
  );
});

export default LetterView;
