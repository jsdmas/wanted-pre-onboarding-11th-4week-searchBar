import React, { createContext, useContext } from 'react';
import { FormState, useFormStateContext, useSetFormStateContext } from './form';

const FieldValueContext = createContext<string | null>(null);

export function FieldProvider({
  name,
  children,
}: {
  name: keyof FormState;
  children: React.ReactNode;
}) {
  const formState = useFormStateContext();

  return (
    <FieldValueContext.Provider value={formState[name]}>{children}</FieldValueContext.Provider>
  );
}

export function useFieldContext() {
  const fieldValue = useContext(FieldValueContext);
  const setFieldValue = useSetFormStateContext();

  if (fieldValue == null) {
    throw new Error(`Cannot find <FieldValueContext.Provider>`);
  }

  return [fieldValue, setFieldValue] as const;
}
