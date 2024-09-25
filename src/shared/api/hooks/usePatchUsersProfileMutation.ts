import type { PatchUsersProfileConfig } from '@api/requests/users/profile';
import { patchUsersProfile } from '@api/requests/users/profile';
import { useMutation } from '@tanstack/react-query';

export const usePatchUsersProfileMutation = (
  settings?: MutationSettings<PatchUsersProfileConfig, typeof patchUsersProfile>
) =>
  useMutation({
    mutationKey: ['patchUsersProfile'],
    mutationFn: ({ params, config }: PatchUsersProfileConfig) =>
      patchUsersProfile({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
