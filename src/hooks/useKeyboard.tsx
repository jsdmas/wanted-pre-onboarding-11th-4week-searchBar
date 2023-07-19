import React, { useState, useRef, KeyboardEvent, useCallback } from 'react';
import { useDataStateContext } from '../context/data';

type KeyboardProps = [
  currentIndex: number,
  ulRef: React.RefObject<HTMLUListElement>,
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
];

export default function useKeyboard(): KeyboardProps {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataState = useDataStateContext();
  const ulRef = useRef<HTMLUListElement>(null);
  const handleKeyPress = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const num = ulRef.current?.childElementCount ?? 0;
      if (num > 0) {
        switch (event.key) {
          case 'ArrowDown':
            setCurrentIndex((prev) => (prev + 1 >= num ? 0 : prev + 1));
            break;
          case 'ArrowUp':
            setCurrentIndex((prev) => (prev - 1 < 0 ? num - 1 : prev - 1));
            break;
        }
      }
    },
    [dataState, setCurrentIndex, ulRef],
  );

  return [currentIndex, ulRef, handleKeyPress, setCurrentIndex];
}
