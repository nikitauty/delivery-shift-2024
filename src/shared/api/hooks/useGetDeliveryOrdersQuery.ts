import { getDeliveryOrders } from '@api/requests/delivery/orders';
import { useQuery } from '@tanstack/react-query';

export const useGetDeliveryOrdersQuery = (settings?: QuerySettings<typeof getDeliveryOrders>) =>
  useQuery({
    queryKey: ['getOrders', settings?.config],
    queryFn: () => getDeliveryOrders({ config: settings?.config }),
    ...settings?.options,
  });
