import { api } from '@api/instance';

interface PostUsersSignInParams {
  phone: string;
}

export type PostUsersSignInConfig = RequestConfig<PostUsersSignInParams>;

interface PostUsersSignInResponse extends Response {
  retryDelay: number;
}

export const postUsersSignIn = async ({ params, config }: PostUsersSignInConfig) =>
  api.post<PostUsersSignInResponse>('/users/signin', params, config);
