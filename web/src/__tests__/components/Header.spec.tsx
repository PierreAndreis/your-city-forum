import React from 'react';
import { fireEvent, act, waitFor } from '@testing-library/react';

import render from '../utils/render';

import { Header } from '../../components';

const mockSignOut = jest.fn();

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

jest.mock('../../contexts/auth/authContext', () => ({
  useAuth: () => ({
    user: { username: 'user-name' },
    signOut: mockSignOut,
  }),
}));

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to render Header component', () => {
    const { getByText } = render(<Header />);

    expect(getByText('user-name')).toBeTruthy();
  });

  it('shoulb be able to sign out', async () => {
    const { getByTestId, getByText } = render(<Header />);

    expect(getByText('user-name')).toBeTruthy();

    const signOutButton = getByTestId('sign-out-button');

    expect(signOutButton).toBeTruthy();

    await act(async () => {
      fireEvent.click(signOutButton);
    });

    await waitFor(() => {
      expect(mockSignOut).toHaveBeenCalledTimes(1);
    });
  });
});
