import type { GetDeliveryOrdersIdParams } from '@api/requests/delivery/orders/id';
import { getDeliveryOrdersId } from '@api/requests/delivery/orders/id';
import { useQuery } from '@tanstack/react-query';

export const useGetDeliveryOrdersIdQuery = (settings: QuerySettings<GetDeliveryOrdersIdParams>) =>
  useQuery({
    queryKey: ['getOrdersId', settings?.config, settings?.config?.params],
    queryFn: () =>
      // eslint-disable-next-line ts/ban-ts-comment
      //@ts-expect-error
      getDeliveryOrdersId({ params: settings.config?.params, config: settings?.config }), // TODO: params is possibly undefined fix that
    ...settings?.options,
  });
