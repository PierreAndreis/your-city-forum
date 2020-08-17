import React from 'react';

import render from '../utils/render';

import NotFoundPage from '../../pages/NotFoundPage';

describe('NotFoundPage component', () => {
  it('should be able to render NotFoundPage component', () => {
    const { getByText } = render(<NotFoundPage />);

    expect(getByText('Page Not Found')).toBeTruthy();
  });
});
