import React from 'react';

import render from '../utils/render';

import { Loading } from '../../components';

describe('Loading component', () => {
  it('should be able to render Loading component', () => {
    const { getByTestId } = render(<Loading color="#00FF66" />);

    const loadingIcon = getByTestId('spinner-icon');

    expect(loadingIcon).toBeTruthy();

    expect(loadingIcon).toHaveStyle('color: #00FF66');
  });
});
