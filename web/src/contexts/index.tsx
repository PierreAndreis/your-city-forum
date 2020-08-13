import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AuthContainer } from './auth';

import dark from '../styles/themes/dark';

const AppContext: React.FC = ({ children }) => (
  <ThemeProvider theme={dark}>
    <AuthContainer>{children}</AuthContainer>
  </ThemeProvider>
);

export default AppContext;
