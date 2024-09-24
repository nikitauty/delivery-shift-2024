import { api } from '@api/instance.ts';
import type { Order } from '@types';

export interface GetDeliveryOrderParams {
  id: string;
}
export type GetDeliveryOrderConfig = RequestConfig<GetDeliveryOrderParams>;

interface GetDeliveryOrderResponse extends BaseResponse {
  order: Order;
}

export const getDeliveryOrdersId = async ({ config, params }: GetDeliveryOrderConfig) =>
  api.get<GetDeliveryOrderResponse>(`/delivery/orders/${params.id}`, config);
