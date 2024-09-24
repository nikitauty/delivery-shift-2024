import { api } from '@api/instance';
import type { Point } from '@types';

type GetDeliveryPointsConfig = RequestConfig;

interface GetDeliveryPointsResponse extends BaseResponse {
  points: Point[];
}

export const getDeliveryPoints = async (requestConfig?: GetDeliveryPointsConfig) =>
  api.get<GetDeliveryPointsResponse>('/delivery/points', requestConfig?.config);
