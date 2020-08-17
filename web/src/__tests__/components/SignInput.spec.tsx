import React from 'react';
import { FiUser } from 'react-icons/fi';
import { fireEvent, waitFor } from '@testing-library/react';

import render from '../utils/render';

import { SignInput } from '../../components';

jest.mock('@unform/core', () => ({
  useField: () => ({
    fieldName: 'name',
    defaultValue: '',
    error: 'input-error',
    registerField: jest.fn(),
  }),
}));

describe('SignInput component', () => {
  it('should be able to render SignInput component', () => {
    const { getByPlaceholderText } = render(
      <SignInput name="name" icon={FiUser} placeholder="place-holder" />,
    );

    expect(getByPlaceholderText('place-holder')).toBeTruthy();
  });

  it('should be able to display label', () => {
    const { getByPlaceholderText, getByText } = render(
      <SignInput
        name="name"
        label="input-label"
        icon={FiUser}
        placeholder="place-holder"
      />,
    );

    expect(getByText('input-label')).toBeTruthy();
    expect(getByPlaceholderText('place-holder')).toBeTruthy();
  });

  it('should be able to display error', () => {
    const { getByPlaceholderText, getByText } = render(
      <SignInput
        name="name"
        label="input-label"
        icon={FiUser}
        placeholder="place-holder"
      />,
    );

    expect(getByText('input-label')).toBeTruthy();
    expect(getByPlaceholderText('place-holder')).toBeTruthy();

    expect(getByText('input-error')).toBeTruthy();
  });

  it('should be able to hightlight SignInput Icon on focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SignInput name="name" icon={FiUser} placeholder="place-holder" />,
    );

    const inputElement = getByPlaceholderText('place-holder');
    const inputContainer = getByTestId('input-container');
    const inputIcon = getByTestId('input-icon');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(inputContainer).toHaveStyle('border-bottom: 1px solid #00FF66');
      expect(inputIcon).toHaveStyle('color: #00FF66;');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputContainer).not.toHaveStyle(
        'border-bottom: 1px solid #00FF66',
      );
      expect(inputIcon).not.toHaveStyle('color: #00FF66;');
    });
  });

  it('should be able keep SignInput Icon highlight on blur when filled', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SignInput name="name" icon={FiUser} placeholder="place-holder" />,
    );

    const inputElement = getByPlaceholderText('place-holder');
    const inputContainer = getByTestId('input-container');
    const inputIcon = getByTestId('input-icon');

    fireEvent.focus(inputElement);

    expect(inputContainer).toHaveStyle('border-bottom: 1px solid #00FF66');

    fireEvent.change(inputElement, { target: { value: 'search' } });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(inputContainer).not.toHaveStyle(
        'border-bottom: 1px solid #00FF66',
      );
      expect(inputIcon).toHaveStyle('color: #00FF66;');
    });
  });
});
