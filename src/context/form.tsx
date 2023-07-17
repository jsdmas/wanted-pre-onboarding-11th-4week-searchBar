import React, { FormEvent, createContext, useContext, useState } from 'react';
import { getFetchResponse } from '../apis/ServerApi';

export type FormState = { q: string; calling: number };

type FormSetState = React.Dispatch<React.SetStateAction<FormState>>;

const FormStateContext = createContext<FormState | null>(null);
const SetFormStateContext = createContext<FormSetState | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<FormState>({ q: '', calling: 0 });
  const dataFetchEvent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await getFetchResponse(state).catch((error) => alert(error));
    console.log(state);
    console.log(data);
  };
  return (
    <FormStateContext.Provider value={state}>
      <SetFormStateContext.Provider value={setState}>
        <form onSubmit={dataFetchEvent}>{children}</form>
      </SetFormStateContext.Provider>
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
