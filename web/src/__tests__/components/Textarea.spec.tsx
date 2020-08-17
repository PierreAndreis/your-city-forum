import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';

import render from '../utils/render';

import { Textarea } from '../../components';

const mockRetriveValue = jest.fn();

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldName: 'name',
    defaultValue: '',
    error: '',
    registerField: jest.fn(),
  }),
}));

describe('Textarea component', () => {
  it('should be able to render Textarea component', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Textarea
        name="name"
        value="textarea value"
        placeholder="place-holder"
        retrieveValue={mockRetriveValue}
      />,
    );

    expect(getByPlaceholderText('place-holder')).toBeTruthy();
    expect(getByText('textarea value')).toBeTruthy();
  });

  it('should be able to render retrieve data when input changes', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Textarea
        name="name"
        value="textarea value"
        placeholder="place-holder"
        retrieveValue={mockRetriveValue}
      />,
    );

    expect(getByPlaceholderText('place-holder')).toBeTruthy();
    expect(getByText('textarea value')).toBeTruthy();

    fireEvent.change(getByPlaceholderText('place-holder'), {
      target: { value: 'change' },
    });

    await waitFor(() => {
      expect(mockRetriveValue).toHaveBeenCalledWith('change');
    });
  });
});
