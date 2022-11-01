import Char from '../../utils/Char_type';
import { Card } from './ChartBox_styled_components';
import DoughnutChart from './DoughnutChart';

const ChartBox = ({
  letter,
  callback,
  massage,
}: {
  letter: Char;
  callback: (letter: Char) => number;
  massage: string;
}) => {
  const numOfWords = callback(letter);

  return (
    <Card>
      <div className="box">
        <div>
          ther are {numOfWords} words starts with the letter {letter}
        </div>
        <DoughnutChart color="rgba(255, 99, 132, 1)" numOfWords={numOfWords} />
      </div>
    </Card>
  );
};

export default ChartBox;
