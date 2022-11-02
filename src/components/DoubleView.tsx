import countWords from '../utils/calcs';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import ChartBox from './chart_box/ChartBox';
import { BodyContainer } from '../style/styled_components';
import colors from '../style/colors';
import { View } from '../utils/letter_state';
import { Navigate } from 'react-router-dom';
import SelectLetter from './SelectLetter';

const DoubleView = observer(() => {
  const state = useLetterState();

  if (state?.view === View.letter) return <Navigate to="/letter" />;

  return (
    <>
      <BodyContainer>
        <ChartBox
          callback={countWords.ContainingletterConjunction}
          massage={['There', 'with conjunction of ']}
          color={colors['dark-secondary']}
        />
        <ChartBox
          callback={countWords.ContainingAnyConjunction}
          massage={['There are ', 'any conjunction']}
          color={colors['emphasis-primary']}
        />
      </BodyContainer>
      <SelectLetter />
    </>
  );
});

export default DoubleView;
