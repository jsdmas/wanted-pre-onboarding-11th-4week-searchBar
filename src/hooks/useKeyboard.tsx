import React, { useRef, KeyboardEvent } from 'react';
import { useIndexStateContext, useSetIndexStateContext } from '../context/indexState';
import { useFieldContext } from '../context/filed';

type KeyboardProps = [
  ulRef: React.RefObject<HTMLUListElement>,
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void,
];

export default function useKeyboard(): KeyboardProps {
  const indexState = useIndexStateContext();
  const setIndexState = useSetIndexStateContext();
  const [, setValue] = useFieldContext();
  const ulRef = useRef<HTMLUListElement>(null);
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const sickList = ulRef.current?.childElementCount ?? 0;
    if (sickList > 0) {
      switch (event.key) {
        case 'ArrowDown':
          setIndexState((prev) => (prev + 1 >= sickList ? 0 : prev + 1));
          break;
        case 'ArrowUp':
          setIndexState((prev) => (prev - 1 < 0 ? sickList - 1 : prev - 1));
          break;
        case 'Enter':
          {
            setIndexState(-1);
            const text = ulRef.current?.children[indexState]?.children[1].textContent ?? '';
            setValue((prev) => ({ ...prev, q: text }));
          }
          break;
      }
    }
  };

  return [ulRef, handleKeyPress];
}
