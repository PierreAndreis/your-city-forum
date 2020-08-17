import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';

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

  it('should be able to hightlight SearchInput Icon on focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SearchInput name="name" placeholder="place-holder" />,
    );

    const inputElement = getByPlaceholderText('place-holder');
    const inputIcon = getByTestId('input-icon');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputIcon).toHaveStyle('color: #00E05A;');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputIcon).not.toHaveStyle('color: #00E05A;');
    });
  });

  it('should be able keep SearchInput Icon highlight on blur when filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SearchInput name="name" placeholder="place-holder" />,
    );

    const inputElement = getByPlaceholderText('place-holder');
    const inputIcon = getByTestId('input-icon');

    fireEvent.focus(inputElement);

    fireEvent.change(inputElement, { target: { value: 'search' } });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputIcon).toHaveStyle('color: #00E05A;');
    });
  });
});
