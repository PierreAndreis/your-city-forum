export interface SignInCredentials {
  username: string;
  password: string;
}

export interface User {
  username: string;
}

export interface AuthContextPayload {
  user: User;
  logged: boolean;
  signIn(payload: SignInCredentials): Promise<void>;
  signOut(): void;
}

export interface AuthState {
  user: User;
  logged: boolean;
}
