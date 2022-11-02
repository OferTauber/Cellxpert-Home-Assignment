import countWords from '../utils/calcs';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../utils/use_letters_state.hook';
import ChartBox from './chart_box/ChartBox';
import { BodyContainer } from '../style/styled_components';
import colors from '../style/colors';
import { View } from '../utils/letter_state';
import { Navigate } from 'react-router-dom';
import SelectLetter from './SelectLetter';

const LetterView = observer(() => {
  const state = useLetterState();

  if (state?.view === View.double) return <Navigate to="/double" />;

  return (
    <>
      <BodyContainer>
        <ChartBox
          callback={countWords.Containingletter}
          massage={['There', 'words that include the letter']}
          color={colors['dark-secondary']}
        />
        <ChartBox
          callback={countWords.StartsWithletter}
          massage={['There are ', 'words that starts with the letter']}
          color={colors['emphasis-primary']}
        />
        <ChartBox
          callback={countWords.EndWithletter}
          massage={['There are ', 'words that ends with the letter']}
          color={colors['emphasis-secondary']}
        />
      </BodyContainer>
      <SelectLetter />
    </>
  );
});

export default LetterView;
