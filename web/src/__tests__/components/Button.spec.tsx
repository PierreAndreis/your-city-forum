import React from 'react';
import { FiUser } from 'react-icons/fi';

import render from '../utils/render';

import { Button } from '../../components';

describe('Button component', () => {
  it('should be able to render Button component', () => {
    const { getByText, getByTestId } = render(
      <Button icon={FiUser}>Test button</Button>,
    );

    expect(getByText('Test button')).toBeTruthy();

    expect(getByTestId('button-icon')).toBeTruthy();
  });
});
