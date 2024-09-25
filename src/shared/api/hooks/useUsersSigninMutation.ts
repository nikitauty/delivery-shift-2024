import type { PostUsersSignInConfig } from '@api/requests/users/signin';
import { postUsersSignIn } from '@api/requests/users/signin';
import { useMutation } from '@tanstack/react-query';

export const useUsersSignInMutation = (
  settings?: MutationSettings<PostUsersSignInConfig, typeof postUsersSignIn>
) =>
  useMutation({
    mutationKey: ['postUsersSignIn'],
    mutationFn: ({ params, config }: PostUsersSignInConfig) =>
      postUsersSignIn({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
