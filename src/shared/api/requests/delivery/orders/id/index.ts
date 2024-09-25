import { api } from '@api/instance.ts';
import type { Order } from '@types';

export interface GetDeliveryOrdersIdParams {
  id: string;
}

export type GetDeliveryOrdersIdConfig = RequestConfig<GetDeliveryOrdersIdParams>;

interface GetDeliveryOrdersIdResponse extends BaseResponse {
  order: Order;
}

export const getDeliveryOrdersId = async ({ config, params }: GetDeliveryOrdersIdConfig) =>
  api.get<GetDeliveryOrdersIdResponse>(`/delivery/orders/${params.id}`, config);
