import { createContext, useContext, ReactNode } from 'react';
import letterState, { LetterState } from './letter_state';

const LetterStateContecst = createContext<LetterState | null>(null);

export const LetterStateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LetterStateContecst.Provider value={letterState}>
      {children}
    </LetterStateContecst.Provider>
  );
};

export const useLetterState = () => useContext(LetterStateContecst);
