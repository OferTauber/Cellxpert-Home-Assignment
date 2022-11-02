import React from 'react';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import { View } from '../utils/letter_state';
import { Navigate } from 'react-router-dom';

const DoubleView = observer(() => {
  const state = useLetterState();

  if (state?.view === View.letter) return <Navigate to="/letter" />;

  return <div>DoubleView</div>;
});

export default DoubleView;
