import type { PostAuthOtpConfig } from '@api/requests/auth/otp';
import { postAuthOtp } from '@api/requests/auth/otp';
import { useMutation } from '@tanstack/react-query';

export const usePostAuthOtpMutation = (
  settings?: MutationSettings<PostAuthOtpConfig, typeof postAuthOtp>
) =>
  useMutation({
    mutationKey: ['postAuthOtp'],
    mutationFn: ({ params, config }: PostAuthOtpConfig) =>
      postAuthOtp({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
