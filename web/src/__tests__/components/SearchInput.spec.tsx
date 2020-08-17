import React from 'react';

import render from '../utils/render';

import { SearchInput } from '../../components';

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldName: 'name',
    defaultValue: '',
    error: '',
    registerField: jest.fn(),
  }),
}));

describe('SearchInput component', () => {
  it('should be able to render SearchInput component', () => {
    const { getByPlaceholderText } = render(
      <SearchInput name="name" placeholder="place-holder" />,
    );

    expect(getByPlaceholderText('place-holder')).toBeTruthy();
  });
});
