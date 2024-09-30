import { api } from '@api/instance';

import type { User } from '@/shared/types';

interface PostUsersSignInParams {
  phone: string;
  code: number;
}

export type PostUsersSignInConfig = RequestConfig<PostUsersSignInParams>;

interface PostUsersSignInResponse extends BaseResponse {
  user: User;
  token: string;
}

export const postUsersSignIn = async ({ params, config }: PostUsersSignInConfig) =>
  api.post<PostUsersSignInResponse>('/users/signin', params, config);
