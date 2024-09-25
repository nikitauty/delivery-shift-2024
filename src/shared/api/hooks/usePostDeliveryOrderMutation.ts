import { useMutation } from '@tanstack/react-query';

import type { PostDeliveryOrderConfig } from '../requests/delivery/order';
import { postDeliveryOrder } from '../requests/delivery/order';

export const usePostDeliveryOrderMutation = (
  settings?: MutationSettings<PostDeliveryOrderConfig, typeof postDeliveryOrder>
) =>
  useMutation({
    mutationKey: ['postDeliveryOrder'],
    mutationFn: ({ params, config }: PostDeliveryOrderConfig) =>
      postDeliveryOrder({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
