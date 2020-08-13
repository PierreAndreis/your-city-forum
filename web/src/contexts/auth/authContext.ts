import { createContext, useContext } from 'react';

import { AuthContextPayload } from './types';

const AuthContext = createContext<AuthContextPayload>({} as AuthContextPayload);

export const AuthProvider = AuthContext.Provider;

export const useAuth = (): AuthContextPayload => {
  const context = useContext(AuthContext);

  return context;
};
