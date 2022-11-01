import { makeAutoObservable } from 'mobx';

export enum View {
  letter = 'letter',
  conjuction = 'conjuction',
}

class LetterState {
  letter: string;
  view: View;

  constructor() {
    makeAutoObservable(this);
    this.letter = '';
    this.view = View.letter;
  }

  setLetter(newLetter: string | null) {
    this.letter = newLetter ? newLetter : '';
  }

  setView(newView: View): void {
    this.view = newView;
  }
}

export default LetterState;
