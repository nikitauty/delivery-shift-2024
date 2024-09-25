import type { PutDeliveryOrdersCancelConfig } from '@api/requests/delivery/orders';
import { putDeliveryOrdersCancel } from '@api/requests/delivery/orders';
import { useMutation } from '@tanstack/react-query';

export const usePutDeliveryOrderMutation = (
  settings?: MutationSettings<PutDeliveryOrdersCancelConfig, typeof putDeliveryOrdersCancel>
) =>
  useMutation({
    mutationKey: ['putDeliveryOrder'],
    mutationFn: ({ params, config }: PutDeliveryOrdersCancelConfig) =>
      putDeliveryOrdersCancel({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
