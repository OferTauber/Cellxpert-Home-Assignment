import Char from '../../utils/Char_type';
import { Card } from './ChartBox_styled_components';
import DoughnutChart from './DoughnutChart';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../../utils/use_letters_state.hook';
import colors from '../../style/colors';

const ChartBox = observer(
  ({
    callback,
    massage,
    color,
  }: {
    callback: (letter: Char) => number;
    massage: [string, string];
    color: colors;
  }) => {
    const state = useLetterState();
    const numOfWords = callback(state?.letter || '');

    return (
      <Card>
        <DoughnutChart color={color} numOfWords={numOfWords} />
        <div>
          {massage[0]} {numOfWords} {massage[1]} "{state?.letter}""
        </div>
      </Card>
    );
  }
);

export default ChartBox;
