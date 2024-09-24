import { api } from '@api/instance';
import type { User } from '@types';

export interface GetUsersProfileParams {
  profile: Omit<User, 'id' | 'phone'>;
  phone: string;
}

export type GetUsersProfileConfig = RequestConfig<GetUsersProfileParams>;

interface GetUsersProfileResponse extends BaseResponse {
  user: User;
}

export const getUsersProfile = async ({ params, config }: GetUsersProfileConfig) =>
  api.patch<GetUsersProfileResponse>('/users/profile', params, config);
