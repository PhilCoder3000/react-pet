import type { UserInfo } from 'firebase/auth';

export interface UserAuth {
  isPendingAuth: boolean;
  isError: boolean;
  errors: Record<string, string>;
  isAuth: boolean;
  userInfo: UserInfo | null;
  isPendingProfile: boolean;
}

export type SignInFormData = {
  email: string;
  password: string;
};

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

export type Profile = {
  displayName: string;
  photoURL: string;
};
