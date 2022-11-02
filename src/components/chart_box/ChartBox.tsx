import Char from '../../utils/Char_type';
import { Card, HoverNum } from '../../style/styled_components';
import DoughnutChart from './DoughnutChart';
import { observer } from 'mobx-react-lite';
import { useLetterState } from '../../utils/use_letters_state.hook';
import colors from '../../style/colors';
import { totalNumOfWords } from '../../utils/calcs';

const numberWithCommas = (number: number): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const ChartBox = observer(
  ({
    callback,
    massage,
    color,
  }: {
    callback: (letter: Char) => number;
    massage: [string, string] | string;
    color: colors;
  }) => {
    const state = useLetterState();
    const numOfWords = callback(state?.letter || '');

    return (
      <Card>
        <DoughnutChart color={color} numOfWords={numOfWords} />
        {typeof massage === 'string' ? (
          <div>
            {massage} {numberWithCommas(numOfWords)}
          </div>
        ) : (
          <div>
            {massage[0]} {numberWithCommas(numOfWords)} {massage[1]} "
            {state?.letter}""
          </div>
        )}
        <HoverNum>
          {Math.floor((numOfWords / totalNumOfWords) * 100)}% <br />
          of total <br /> words
        </HoverNum>
      </Card>
    );
  }
);

export default ChartBox;
