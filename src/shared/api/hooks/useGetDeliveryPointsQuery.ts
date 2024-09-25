import { useQuery } from '@tanstack/react-query';

import { getDeliveryPoints } from '../requests/delivery/points';

export const useGetDeliveryPointsQuery = (settings?: QuerySettings<typeof getDeliveryPoints>) =>
  useQuery({
    queryKey: ['getPoints', settings?.config],
    queryFn: () => getDeliveryPoints({ config: settings?.config }),
    ...settings?.options,
  });
