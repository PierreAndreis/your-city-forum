import React from 'react';
import * as toastify from 'react-toastify';
import { fireEvent, act, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';

import render from '../utils/render';
import { TopicModal } from '../../components';

const toastSpy = jest.spyOn(toastify, 'toast');

const mockCloseModal = jest.fn();
const mockNewTopic = jest.fn();

const mockApi = new MockAdapter(api);

describe('TopicModal component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockApi.reset();
  });

  it('should be able to render TopicModal component', () => {
    const { getByText } = render(
      <TopicModal closeModal={mockCloseModal} newTopic={mockNewTopic} />,
    );

    expect(getByText('Novo Tópico')).toBeTruthy();
  });

  it('should be able to close the modal when pressing X button', () => {
    const { getByText, getByTestId } = render(
      <TopicModal closeModal={mockCloseModal} newTopic={mockNewTopic} />,
    );

    expect(getByText('Novo Tópico')).toBeTruthy();

    fireEvent.click(getByTestId('close-modal-button'));

    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });

  it('should be able to toggle the modal when pressing toggle button', async () => {
    const { getByText, getByTestId, getByPlaceholderText, container } = render(
      <TopicModal closeModal={mockCloseModal} newTopic={mockNewTopic} />,
    );

    expect(getByText('Novo Tópico')).toBeTruthy();
    expect(getByPlaceholderText('Informe o problema')).toBeTruthy();
    expect(container.querySelector('.preview-markdown')).toBeFalsy();

    await act(async () => {
      fireEvent.click(getByTestId('toggle-viewer-button'));
    });

    await waitFor(() => {
      expect(container.querySelector('.preview-markdown')).toBeTruthy();
    });

    await act(async () => {
      fireEvent.click(getByTestId('toggle-viewer-button'));
    });

    await waitFor(() => {
      expect(container.querySelector('.preview-markdown')).toBeFalsy();
    });
  });

  it('should be able to change input and share value between textarea and MarkdownViewer', async () => {
    const { getByText, getByTestId, getByPlaceholderText, container } = render(
      <TopicModal closeModal={mockCloseModal} newTopic={mockNewTopic} />,
    );

    const textareaElement = getByPlaceholderText('Informe o problema');

    expect(getByText('Novo Tópico')).toBeTruthy();
    expect(textareaElement).toBeTruthy();

    fireEvent.change(textareaElement, {
      target: { value: '## textarea value' },
    });

    await waitFor(() => {
      expect(getByText('## textarea value')).toBeTruthy();
    });

    await act(async () => {
      fireEvent.click(getByTestId('toggle-viewer-button'));
    });

    await waitFor(() => {
      expect(container.querySelector('.preview-markdown')).toBeTruthy();
      expect(getByText('textarea value')).toBeTruthy();
    });
  });

  it('should be able to create a topic', async () => {
    mockApi.onPost('/opinions').reply(200);

    const { getByText, getByPlaceholderText } = render(
      <TopicModal closeModal={mockCloseModal} newTopic={mockNewTopic} />,
    );

    const inputElement = getByPlaceholderText('Título');
    const textareaElement = getByPlaceholderText('Informe o problema');

    expect(getByText('Novo Tópico')).toBeTruthy();
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

    expect(mockNewTopic).toHaveBeenCalledTimes(1);
    expect(mockCloseModal).toHaveBeenCalledTimes(1);

    expect(toastSpy).toHaveBeenCalledWith('Tópico criado com sucesso!', {
      type: 'success',
    });
  });

  it('should display a toast message if submit without credentials', async () => {
    const { getByText, getByPlaceholderText } = render(
      <TopicModal closeModal={mockCloseModal} newTopic={mockNewTopic} />,
    );

    const inputElement = getByPlaceholderText('Título');
    const textareaElement = getByPlaceholderText('Informe o problema');

    expect(getByText('Novo Tópico')).toBeTruthy();
    expect(inputElement).toBeTruthy();
    expect(textareaElement).toBeTruthy();

    await act(async () => {
      fireEvent.click(getByText('Postar'));
    });

    expect(mockNewTopic).not.toHaveBeenCalledTimes(1);
    expect(mockCloseModal).not.toHaveBeenCalledTimes(1);

    expect(toastSpy).toHaveBeenCalledWith(
      'Preecha todos os dados corretamente!',
      {
        type: 'warning',
      },
    );
  });

  it('should display a toast message if api call fails', async () => {
    mockApi.onPost('/opinions').reply(500);

    const { getByText, getByPlaceholderText } = render(
      <TopicModal closeModal={mockCloseModal} newTopic={mockNewTopic} />,
    );

    const inputElement = getByPlaceholderText('Título');
    const textareaElement = getByPlaceholderText('Informe o problema');

    expect(getByText('Novo Tópico')).toBeTruthy();
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

    expect(mockNewTopic).not.toHaveBeenCalledTimes(1);
    expect(mockCloseModal).not.toHaveBeenCalledTimes(1);

    expect(toastSpy).toHaveBeenCalledWith(
      'Erro inesperado, verifique suas credenciais, relogue e tente novamente!',
      {
        type: 'error',
      },
    );
  });
});
