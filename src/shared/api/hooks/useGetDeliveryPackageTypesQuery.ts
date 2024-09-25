import { useQuery } from '@tanstack/react-query';

import { getDeliveryPackageTypes } from '../requests/delivery/package/types';

export const useGetDeliveryPackageTypesQuery = (
  settings?: QuerySettings<typeof getDeliveryPackageTypes>
) =>
  useQuery({
    queryKey: ['getPackageTypes', settings?.config],
    queryFn: () => getDeliveryPackageTypes({ config: settings?.config }),
    ...settings?.options,
  });
