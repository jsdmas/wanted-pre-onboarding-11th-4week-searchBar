import React, { createContext, useContext, useState } from 'react';

export type FormState = {
  keyword: string;
};

type FormSetState = React.Dispatch<React.SetStateAction<FormState>>;

const FormStateContext = createContext<FormState | null>(null);
const SetFormStateContext = createContext<React.Dispatch<React.SetStateAction<FormState>> | null>(
  null,
);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<FormState | null>(null);

  return (
    <FormStateContext.Provider value={state}>
      <SetFormStateContext.Provider value={setState as FormSetState}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(state);
          }}
        >
          {children}
        </form>
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
