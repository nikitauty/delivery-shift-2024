import { api } from '@api/instance.ts';

export interface PostAuthOtpParams {
  phone: string;
}
export type PostAuthOtpConfig = RequestConfig<PostAuthOtpParams>;

interface PostAuthOtpResponse extends BaseResponse {
  retryDelay: number;
}

export const postAuthOtp = async ({ params, config }: PostAuthOtpConfig) =>
  api.post<PostAuthOtpResponse>('/auth/otp', params, config);
