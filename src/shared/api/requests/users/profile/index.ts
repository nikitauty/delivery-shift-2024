import { api } from '@api/instance';
import type { User } from '@types';

export interface PatchUsersProfileParams {
  profile: Omit<User, 'id' | 'phone'>;
  phone: string;
}

export type PatchUsersProfileConfig = RequestConfig<PatchUsersProfileParams>;

interface PatchUsersProfileResponse extends BaseResponse {
  user: User;
}

export const patchUsersProfile = async ({ params, config }: PatchUsersProfileConfig) =>
  api.patch<PatchUsersProfileResponse>('/users/profile', params, config);
