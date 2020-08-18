import React from 'react';
import * as toastify from 'react-toastify';
import { fireEvent, waitFor, act } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import render from '../utils/render';

import api from '../../services/api';
import Dashboard from '../../pages/Dashboard';

const toastSpy = jest.spyOn(toastify, 'toast');

const mockPush = jest.fn();

const mockApi = new MockAdapter(api);

const mockOpinions = {
  opinions: [
    {
      id: 1,
      title: 'Title',
      upvotes_count: 1,
    },
    {
      id: 2,
      title: 'Filter',
      upvotes_count: 1,
    },
  ],
};

jest.mock('react-router-dom', () => ({
  Link: ({ children }: { children: React.ReactNode }) => children,
  useHistory: () => ({
    push: mockPush,
  }),
}));

jest.mock('../../contexts/auth/authContext', () => ({
  useAuth: () => ({
    user: { username: 'user-name' },
    signOut: jest.fn(),
  }),
}));

describe('Dashboard page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockApi.reset();
  });

  it('should be able to render Dashboard page', async () => {
    await act(async () => {
      const { getByText } = render(<Dashboard />);

      expect(getByText('Criar tópico')).toBeTruthy();
    });
  });

  it('should be able to load data from api', async () => {
    mockApi.onGet('/opinions').reply(200, mockOpinions);

    await act(async () => {
      const { getByText } = render(<Dashboard />);

      expect(getByText('Criar tópico')).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Title')).toBeTruthy();
      });
    });
  });

  it('should be able to search topic by title', async () => {
    mockApi.onGet('/opinions').reply(200, mockOpinions);

    await act(async () => {
      const {
        getByText,
        getByPlaceholderText,
        queryByText,
        getByTestId,
      } = render(<Dashboard />);

      expect(getByText('Criar tópico')).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Title')).toBeTruthy();
      });

      const searchInput = getByPlaceholderText('Procure por título');
      const searchButton = getByTestId('input-icon');

      expect(searchInput).toBeTruthy();

      act(() => {
        fireEvent.change(searchInput, { target: { value: 'Filter' } });
      });

      fireEvent.click(searchButton);

      await waitFor(() => {
        expect(queryByText('Title')).toBeFalsy();

        expect(getByText('Filter')).toBeTruthy();
      });

      await act(async () => {
        fireEvent.change(searchInput, {
          target: { value: '' },
        });
      });

      fireEvent.click(searchButton);

      await waitFor(() => {
        expect(getByText('Title')).toBeTruthy();
        expect(getByText('Filter')).toBeTruthy();
      });
    });
  });

  it('should be able display TopicModal an create a topic', async () => {
    mockApi
      .onGet('/opinions')
      .reply(200, mockOpinions)
      .onPost('/opinions')
      .reply(200);

    await act(async () => {
      const { getByText, getByPlaceholderText } = render(<Dashboard />);

      const createTopicButton = getByText('Criar tópico');

      expect(createTopicButton).toBeTruthy();

      await waitFor(() => {
        expect(getByText('Title')).toBeTruthy();
      });

      act(() => {
        fireEvent.click(createTopicButton);
      });

      const inputElement = getByPlaceholderText('Título');
      const textareaElement = getByPlaceholderText('Informe o problema');

      expect(inputElement).toBeTruthy();
      expect(textareaElement).toBeTruthy();

      fireEvent.change(inputElement, {
        target: { value: 'Title' },
      });

      fireEvent.change(textareaElement, {
        target: { value: '## textarea value' },
      });

      await waitFor(() => {
        expect(getByText('## textarea value')).toBeTruthy();
      });

      await act(async () => {
        fireEvent.click(getByText('Postar'));
      });

      await waitFor(() => {
        expect(toastSpy).toHaveBeenCalledWith('Tópico criado com sucesso!', {
          type: 'success',
        });
      });
    });
  });
});
