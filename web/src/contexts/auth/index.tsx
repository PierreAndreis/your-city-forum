import React, { useCallback, useState, useMemo } from 'react';

import api from '../../services/api';

import { AuthProvider } from './authContext';
import { AuthState, SignInCredentials } from './types';

const AuthContainer: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LOUNDgg:token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { logged: true };
    }

    return { logged: false };
  });

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      const response = await api.post('/login', {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('@LOUNDgg:token', JSON.stringify(token));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ logged: !!token });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@LOUNDgg:token');

    setData({ logged: false });
  }, []);

  const payload = useMemo(() => {
    return { logged: data.logged, signIn, signOut };
  }, [data.logged, signIn, signOut]);

  return <AuthProvider value={payload}>{children}</AuthProvider>;
};

export { AuthContainer };
