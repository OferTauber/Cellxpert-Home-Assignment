import React from 'react';
import Char from '../utils/Char_type';

const ChartBox = ({
  letter,
  callback,
}: {
  letter: Char;
  callback: (letter: Char) => number;
}) => {
  return (
    <>
      <div>
        ther are {callback(letter)} words starts with the letter {letter}
      </div>
    </>
  );
};

export default ChartBox;
