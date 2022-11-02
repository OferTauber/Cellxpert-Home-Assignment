import { makeAutoObservable } from 'mobx';
import Char from './Char_type';

export enum View {
  letter = 'letter',
  double = 'double',
}

export class LetterState {
  letter: Char;
  view: View;

  constructor(letter: Char, view: View) {
    makeAutoObservable(this);
    this.letter = letter;
    this.view = view;
  }

  setLetter(newLetter: Char | null) {
    this.letter = newLetter ? newLetter : '';
  }

  setView(newView: View): void {
    this.view = newView;
  }
}

const letterState = new LetterState('', View.letter);

export default letterState;
