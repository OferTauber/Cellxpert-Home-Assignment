import { useState } from 'react';
import { observer } from 'mobx-react';
import { useLetterState } from '../utils/use_letters_state.hook';
import Char from '../utils/Char_type';
import { NavigateFunction } from 'react-router-dom';
import { Frame, Button, CharInput } from '../style/styled_components';

const SelectLetter = observer(
  ({
    navigateFunction,
  }: {
    navigateFunction?: NavigateFunction | undefined;
  }) => {
    const state = useLetterState();

    const [invalidInput, setInvalidInput] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(state?.letter || '');

    const convertVALIDATED_InputIntoChar = (VALIDATED_Input: any): Char => {
      //! use ONLY FOR *VALIDATED* INPUT!!!!!
      const char: Char = VALIDATED_Input;
      return char;
    };

    const isInputValid = (input: string): boolean => {
      return input.toUpperCase() !== input.toLowerCase(); //* returns 'true' ONLY to letters
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const value = e.target.value;
      const lastChar = value[value.length - 1];
      setInputValue(lastChar);
      setInvalidInput(!isInputValid(lastChar));
    };

    const updateStateLetter = (): void => {
      if (invalidInput) return;

      state?.setLetter(convertVALIDATED_InputIntoChar(inputValue));

      if (navigateFunction) navigateFunction('/' + state?.view);
    };

    return (
      <Frame>
        <label htmlFor="letter">
          <h2>Pleas select a letter</h2>
        </label>
        <div>
          <CharInput
            type="text"
            name="letter"
            value={inputValue.toUpperCase()}
            onChange={(e) => onInputChange(e)}
          />
          <Button
            disabled={invalidInput || inputValue === ''}
            onClick={updateStateLetter}
          >
            Select
          </Button>
        </div>
        {invalidInput ? <p>Invalid input!</p> : <br />}
      </Frame>
    );
  }
);

export default SelectLetter;
