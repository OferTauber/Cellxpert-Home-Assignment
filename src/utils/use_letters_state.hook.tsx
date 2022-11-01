import { createContext, useContext, ReactNode } from 'react';
import LetterState from './letter_state';

const LetterStateContecst = createContext<LetterState | null>(null);

export const LetterStateProvider = ({ children }: { children: ReactNode }) => {
  const letterState = new LetterState();

  return (
    <LetterStateContecst.Provider value={letterState}>
      {children}
    </LetterStateContecst.Provider>
  );
};

export const useLetterState = () => useContext(LetterStateContecst);
