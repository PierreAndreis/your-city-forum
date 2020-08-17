import React from 'react';
import { RenderResult } from '@testing-library/react';

import render from './render';

describe('Render util', () => {
  it('should be able to return element render results', () => {
    const customRender = render(<h1>Element</h1>);

    const result = {} as RenderResult;

    expect(typeof customRender).toBe(typeof result);
    expect(typeof customRender).toBe('object');

    expect(customRender.queryByText).toBeTruthy();
  });
});
