import { api } from '@api/instance.ts';
import type { Order } from '@types';

type GetDeliveryOrdersConfig = RequestConfig;

interface GetDeliveryOrdersResponse extends Response {
  orders: Order[];
}

export const getDeliveryOrders = async (requestConfig?: GetDeliveryOrdersConfig) =>
  api.get<GetDeliveryOrdersResponse>('/delivery/orders', requestConfig?.config);

export interface PutDeliveryOrdersCancelParams {
  orderId: string;
}

export type PutDeliveryOrdersCancelConfig = RequestConfig<PutDeliveryOrdersCancelParams>;

type PutDeliveryOrdersCancelResponse = BaseResponse;

export const putDeliveryOrdersCancel = async ({ params, config }: PutDeliveryOrdersCancelConfig) =>
  api.put<PutDeliveryOrdersCancelResponse>(`/delivery/orders/cancel`, params, config);
