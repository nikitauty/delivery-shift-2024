import { api } from '@api/instance.ts';
import type { Address, Option, Order, Point, User as _User } from '@types';

type User = Omit<_User, 'id' | 'email' | 'city'>;

export interface PostDeliveryOrderParams {
  senderPoint: Point;
  senderAddress: Address;
  sender: User;
  receiverPoint: Point;
  receiverAddress: Address;
  receiver: User;
  payer: 'SENDER' | 'RECEIVER';
  option: Option;
}

export type PostDeliveryOrderConfig = RequestConfig<PostDeliveryOrderParams>;

interface PostDeliveryOrderResponse extends BaseResponse {
  order: Order;
}

export const postDeliveryOrder = async ({ params, config }: PostDeliveryOrderConfig) =>
  api.post<PostDeliveryOrderResponse>('/delivery/order', params, config);
