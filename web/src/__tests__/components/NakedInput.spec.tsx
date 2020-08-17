import React from 'react';

import render from '../utils/render';

import { NakedInput } from '../../components';

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldName: 'name',
    defaultValue: '',
    error: '',
    registerField: jest.fn(),
  }),
}));

describe('NakedInput component', () => {
  it('should be able to render NakedInput component', () => {
    const { getByPlaceholderText } = render(
      <NakedInput name="name" placeholder="place-holder" />,
    );

    expect(getByPlaceholderText('place-holder')).toBeTruthy();
  });
});
