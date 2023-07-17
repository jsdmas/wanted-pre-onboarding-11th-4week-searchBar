import React, { createContext, useContext, useState } from 'react';

export type DataState = { sickCd: string; sickNm: string }[];

type DataSetState = React.Dispatch<React.SetStateAction<DataState>>;

const DataStateContext = createContext<DataState | null>(null);
const SetDataStateContext = createContext<DataSetState | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DataState>([]);
  console.log(state);
  return (
    <DataStateContext.Provider value={state}>
      <SetDataStateContext.Provider value={setState}>{children}</SetDataStateContext.Provider>
    </DataStateContext.Provider>
  );
}

export function useDataStateContext() {
  const context = useContext(DataStateContext);

  if (context == null) {
    throw new Error(`Cannot find <DataStateContext.Provider>`);
  }

  return context;
}

export function useSetDataStateContext() {
  const context = useContext(SetDataStateContext);

  if (context == null) {
    throw new Error(`Cannot find <SetDataStateContext.Provider>`);
  }

  return context;
}
