import { api } from '@api/instance';
import type { User } from '@types';

type GetUsersSessionConfig = RequestConfig;

interface GetUsersSessionResponse extends BaseResponse {
  user: User;
}

export const getUsersSession = async (requestConfig?: GetUsersSessionConfig) =>
  api.get<GetUsersSessionResponse>('/users/session', requestConfig?.config);
