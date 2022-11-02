import countWords from '../utils/calcs';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import ChartBox from './chart_box/ChartBox';
import { BodyContainer, ChartsContainer } from '../style/styled_components';
import colors from '../style/colors';
import { View } from '../utils/letter_state';
import { Navigate } from 'react-router-dom';
import SelectLetter from './SelectLetter';

const DoubleView = observer(() => {
  const state = useLetterState();

  if (state?.view === View.letter) return <Navigate to="/letter" />;

  return (
    <BodyContainer>
      <ChartsContainer>
        <ChartBox
          callback={countWords.ContainingletterConjunction}
          massage={[
            'There are ',
            'words that include a double occurrence of the letter ',
          ]}
          color={colors.red}
        />
        <ChartBox
          callback={countWords.ContainingAnyConjunction}
          massage={
            'Number of words that have the same (any) letter repeated in conjunction is'
          }
          color={colors.green}
        />
      </ChartsContainer>
      <SelectLetter />
    </BodyContainer>
  );
});

export default DoubleView;
