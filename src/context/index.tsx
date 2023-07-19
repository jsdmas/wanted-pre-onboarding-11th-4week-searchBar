import React, { createContext, useContext, useState } from 'react';

type IndexSetState = React.Dispatch<React.SetStateAction<number>>;

const IndexStateContext = createContext<number | null>(null);
const SetIndexStateContext = createContext<IndexSetState | null>(null);

export function IndexProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(-1);
  return (
    <IndexStateContext.Provider value={state}>
      <SetIndexStateContext.Provider value={setState}>{children}</SetIndexStateContext.Provider>
    </IndexStateContext.Provider>
  );
}

export function useIndexStateContext() {
  const context = useContext(IndexStateContext);

  if (context == null) {
    throw new Error(`Cannot find <IndexStateContext.Provider>`);
  }

  return context;
}

export function useSetIndexStateContext() {
  const context = useContext(SetIndexStateContext);

  if (context == null) {
    throw new Error(`Cannot find <SetIndexStateContext.Provider>`);
  }

  return context;
}
