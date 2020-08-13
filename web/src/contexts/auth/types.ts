export interface SignInCredentials {
  username: string;
  password: string;
}

export interface AuthContextPayload {
  logged: boolean;
  signIn(payload: SignInCredentials): Promise<void>;
  signOut(): void;
}

export interface AuthState {
  logged: boolean;
}
