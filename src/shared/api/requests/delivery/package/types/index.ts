import { api } from '@api/instance';
import type { Package } from '@types';

type GetDeliveryPackageTypesConfig = RequestConfig;

interface GetDeliveryPackageTypesResponse extends BaseResponse {
  packages: Package[];
}

export const getDeliveryPackageTypes = async (requestConfig?: GetDeliveryPackageTypesConfig) =>
  api.get<GetDeliveryPackageTypesResponse>('/delivery/package/types', requestConfig?.config);
