import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import { useAuth } from '../../contexts/auth/authContext';
import { AuthContainer } from '../../contexts/auth';

const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');
const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');
const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');

const mockApi = new MockAdapter(api);

describe('Auth Context', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    getItemSpy.mockImplementation(() => null);
  });

  it('should be able to use context', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthContainer,
    });

    expect(result.current.logged).toBe(undefined);
    expect(result.current.user).toBe(undefined);
    expect(typeof result.current.signIn).toBe('function');
    expect(typeof result.current.signOut).toBe('function');
  });

  it('should be able to sign in', async () => {
    const apiResponse = {
      token: 'token-1234',
    };

    mockApi.onPost('login').reply(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthContainer,
    });

    result.current.signIn({
      username: 'userName',
      password: 'userPassword',
    });

    await waitForNextUpdate();

    expect(result.current.user.username).toEqual('userName');

    expect(setItemSpy).toHaveBeenCalledWith(
      '@LOUNDgg:token',
      apiResponse.token,
    );

    expect(setItemSpy).toHaveBeenCalledWith('@LOUDgg:username', 'userName');
  });

  it('should be able to receive data from local storage', () => {
    const mockData = {
      token: 'token-1234',
      user: {
        username: 'userPassword',
      },
    };

    getItemSpy.mockImplementation(key => {
      switch (key) {
        case '@LOUNDgg:token':
          return mockData.token;

        case '@LOUDgg:username':
          return mockData.user.username;

        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthContainer,
    });

    expect(getItemSpy).toHaveBeenCalledTimes(2);

    expect(result.current.user).toEqual(expect.objectContaining(mockData.user));
  });

  it('should be able to sign out', () => {
    getItemSpy.mockImplementation(key => {
      switch (key) {
        case '@LOUNDgg:token':
          return 'token-1234';

        case '@LOUDgg:username':
          return 'userName';

        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthContainer,
    });

    expect(result.current.user.username).toEqual('userName');

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });
});
