import words from 'an-array-of-english-words';
import Char from './Char_type';

const countWords = {
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

  NumOfLetterShowaInTheDictionary(letter: Char): number {
    return words.reduce((acc: number, cur: string): number => {
      return (acc += cur
        .split('')
        .reduce((acc: number, cur: string): number => {
          if (cur.toLowerCase() === letter) acc++;
          return acc;
        }, 0));
    }, 0);
  },
};

export const totalNumOfWords = words.length;

export default countWords;
