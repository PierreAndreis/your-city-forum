import React from 'react';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import dark from '../../styles/themes/dark';

export default function RenderTest(children: React.ReactNode): RenderResult {
  return rtlRender(<ThemeProvider theme={dark}>{children}</ThemeProvider>);
}
