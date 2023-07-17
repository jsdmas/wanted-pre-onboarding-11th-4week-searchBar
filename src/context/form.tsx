import React, { createContext, useContext, useState } from 'react';

export type FormState = { q: string; calling: number };

type FormSetState = React.Dispatch<React.SetStateAction<FormState>>;

const FormStateContext = createContext<FormState | null>(null);
const SetFormStateContext = createContext<FormSetState | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<FormState>({ q: '', calling: 0 });
  return (
    <FormStateContext.Provider value={state}>
      <SetFormStateContext.Provider value={setState}>{children}</SetFormStateContext.Provider>
    </FormStateContext.Provider>
  );
}

export function useFormStateContext() {
  const context = useContext(FormStateContext);

  if (context == null) {
    throw new Error(`Cannot find <FormStateContext.Provider>`);
  }

  return context;
}

export function useSetFormStateContext() {
  const context = useContext(SetFormStateContext);

  if (context == null) {
    throw new Error(`Cannot find <SetFormStateContext.Provider>`);
  }

  return context;
}
