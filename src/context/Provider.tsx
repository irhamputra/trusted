import { createContext, FC, useState } from 'react';
import { ProviderContextDefaultProps, ProviderProps } from '../typings';

export const TrustedContext = createContext<ProviderContextDefaultProps<any>>(
  {}
);

export const TrustedProvider: FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <TrustedContext.Provider value={{ state, setState }}>
      {children}
    </TrustedContext.Provider>
  );
};
