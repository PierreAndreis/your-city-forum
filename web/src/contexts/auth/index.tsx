import React, { useCallback, useState, useMemo } from 'react';

import api from '../../services/api';

import { AuthProvider } from './authContext';
import { AuthState, SignInCredentials } from './types';

const AuthContainer: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LOUNDgg:token');
    const username = localStorage.getItem('@LOUDgg:username');

    if (token && username) {
      api.defaults.headers.authorization = `Bearer ${token.replace('"', '')}`;

      return { logged: true, user: { username } };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ username, password }: SignInCredentials) => {
      const response = await api.post('/login', {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem('@LOUNDgg:token', token);
      localStorage.setItem('@LOUDgg:username', username);

      api.defaults.headers.authorization = `Bearer ${token.replace('"', '')}`;

      setData({ logged: !!token, user: { username } });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@LOUNDgg:token');
    localStorage.removeItem('@LOUDgg:username');

    setData({} as AuthState);
  }, []);

  const payload = useMemo(() => {
    const { logged, user } = data;

    return { logged, user, signIn, signOut };
  }, [data, signIn, signOut]);

  return <AuthProvider value={payload}>{children}</AuthProvider>;
};

export { AuthContainer };
