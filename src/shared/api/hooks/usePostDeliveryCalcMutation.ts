import type { PostDeliveryCalcConfig } from '@api/requests/delivery/calc';
import { postDeliveryCalc } from '@api/requests/delivery/calc';
import { useMutation } from '@tanstack/react-query';

export const usePostDeliveryCalcMutation = (
  settings?: MutationSettings<PostDeliveryCalcConfig, typeof postDeliveryCalc>
) =>
  useMutation({
    mutationKey: ['postDeliveryCalc'],
    mutationFn: ({ params, config }: PostDeliveryCalcConfig) =>
      postDeliveryCalc({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options,
  });
