import words from 'an-array-of-english-words';
import Char from './Char_type';

const cauntWords = {
  totalNumOfWords: words.length,

  StartsWithletter(letter: Char): number {
    return words.filter((word) => word[0].toLowerCase() === letter).length;
  },

  EndWithletter(letter: Char): number {
    return words.filter((word) => word.slice(-1).toLowerCase() === letter)
      .length;
  },

  Containingletter(letter: Char): number {
    return words.filter((word) => word.toLowerCase().includes(letter)).length;
  },

  ContainingletterConjunction(letter: Char): number {
    return words.filter((word) => word.toLowerCase().includes(letter + letter))
      .length;
  },

  ContainingAnyConjunction(): number {
    return words.filter((word) => {
      const lowerCaseWord = word.toLowerCase();
      for (let i = 0; i < lowerCaseWord.length - 1; i++) {
        if (lowerCaseWord[i] === lowerCaseWord[i + 1]) return true;
      }
      return false;
    }).length;
  },
};

export const totalNumOfWords = words.length;

export const countWordsStartsWithletter = (letter: Char): number => {
  return words.filter((word) => word[0].toLowerCase() === letter).length;
};

export const countWordsEndWithletter = (letter: Char): number => {
  return words.filter((word) => word.slice(-1).toLowerCase() === letter).length;
};

export const countWordsContainingletter = (letter: Char): number => {
  return words.filter((word) => word.toLowerCase().includes(letter)).length;
};

export const countWordsContainingletterConjunction = (letter: Char): number => {
  return words.filter((word) => word.toLowerCase().includes(letter + letter))
    .length;
};
export const countWordsContainingAnyConjunction = (): number => {
  return words.filter((word) => {
    const lowerCaseWord = word.toLowerCase();
    for (let i = 0; i < lowerCaseWord.length - 1; i++) {
      if (lowerCaseWord[i] === lowerCaseWord[i + 1]) return true;
    }
    return false;
  }).length;
};

export default cauntWords;
