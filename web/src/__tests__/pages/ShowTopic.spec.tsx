import React from 'react';
import * as toastify from 'react-toastify';
import { fireEvent, waitFor, act, cleanup } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import render from '../utils/render';

import api from '../../services/api';
import ShowTopic from '../../pages/ShowTopic';

const toastSpy = jest.spyOn(toastify, 'toast');

const mockPush = jest.fn();

const mockApi = new MockAdapter(api);

let mockState = {} || undefined;

const mockOpinion = {
  id: 1,
  title: 'Title',
  content: 'Content',
  upvotes: [
    {
      opinion_id: 1,
      user_id: 1,
    },
  ],
};

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
  useHistory: () => ({
    push: mockPush,
  }),
  useLocation: () => ({
    state: mockState,
  }),
}));

jest.mock('../../contexts/auth/authContext', () => ({
  useAuth: () => ({
    user: { username: 'user-name' },
    signOut: jest.fn(),
  }),
}));

describe('ShowTopic page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockApi.reset();

    mockState = {
      opinionId: 1,
    };
  });

  afterEach(() => {
    cleanup();
  });

  it('should redirect to "/dashboard" if params empty', async () => {
    mockState = undefined;

    render(<ShowTopic />);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should be able to load data from api', async () => {
    mockApi.onGet('/opinions/1').reply(200, mockOpinion);

    const { getByTestId: getByTestIdOne } = render(<ShowTopic />);
    expect(getByTestIdOne('spinner-icon')).toBeTruthy();

    await act(async () => {
      const { getByText } = render(<ShowTopic />);

      expect(getByText('0')).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Content')).toBeTruthy();
        expect(getByText('1')).toBeTruthy();
      });
    });
  });

  it('should display a toast message if api call fails', async () => {
    mockApi.onGet('/opinions/1').reply(500);

    await act(async () => {
      const { getByText } = render(<ShowTopic />);

      expect(getByText('0')).toBeTruthy();

      await waitFor(() => {
        expect(toastSpy).toHaveBeenCalledWith(
          'Erro inesperado, relogue e tente novamente',
          {
            type: 'error',
          },
        );
      });
    });
  });

  it('should be able to vote on the topic by pressing up button', async () => {
    mockApi
      .onGet('/opinions/1')
      .reply(200, mockOpinion)
      .onPost('opinions/1/vote')
      .reply(200);

    await act(async () => {
      const { getByText, getByTestId } = render(<ShowTopic />);

      expect(getByText('0')).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Content')).toBeTruthy();
        expect(getByText('1')).toBeTruthy();
      });

      const upVoteButton = getByTestId('plus-vote-button');

      fireEvent.click(upVoteButton);

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/dashboard');

        expect(toastSpy).toHaveBeenCalledWith('Voto efetuado com sucesso!', {
          type: 'success',
        });
      });
    });
  });

  it('should display a toast message if vote no valid', async () => {
    mockApi
      .onGet('/opinions/1')
      .reply(200, mockOpinion)
      .onPost('opinions/1/vote')
      .reply(500);

    await act(async () => {
      const { getByText, getByTestId } = render(<ShowTopic />);

      expect(getByText('0')).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Content')).toBeTruthy();
        expect(getByText('1')).toBeTruthy();
      });

      const upVoteButton = getByTestId('plus-vote-button');

      fireEvent.click(upVoteButton);

      await waitFor(() => {
        expect(mockPush).not.toHaveBeenCalled();

        expect(toastSpy).toHaveBeenCalledWith(
          'Não permitido mais de um voto positivo por usuário',
          {
            type: 'error',
          },
        );
      });
    });
  });

  it('should be able to down vote on the topic by pressing down button', async () => {
    mockApi
      .onGet('/opinions/1')
      .reply(200, mockOpinion)
      .onDelete('opinions/1/vote')
      .reply(200);

    await act(async () => {
      const { getByText, getByTestId } = render(<ShowTopic />);

      expect(getByText('0')).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Content')).toBeTruthy();
        expect(getByText('1')).toBeTruthy();
      });

      const downVoteButton = getByTestId('minus-vote-button');

      fireEvent.click(downVoteButton);

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/dashboard');

        expect(toastSpy).toHaveBeenCalledWith('Voto retirado com sucesso!', {
          type: 'success',
        });
      });
    });
  });

  it('should display a toast message if down vote no valid', async () => {
    mockApi
      .onGet('/opinions/1')
      .reply(200, mockOpinion)
      .onDelete('opinions/1/vote')
      .reply(500);

    await act(async () => {
      const { getByText, getByTestId } = render(<ShowTopic />);

      expect(getByText('0')).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Content')).toBeTruthy();
        expect(getByText('1')).toBeTruthy();
      });

      const downVoteButton = getByTestId('minus-vote-button');

      fireEvent.click(downVoteButton);

      await waitFor(() => {
        expect(mockPush).not.toHaveBeenCalled();

        expect(toastSpy).toHaveBeenCalledWith(
          'Não permitido mais de um voto negativo por usuário',
          {
            type: 'error',
          },
        );
      });
    });
  });
});
