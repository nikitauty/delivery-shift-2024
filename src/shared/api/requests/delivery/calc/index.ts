import { api } from '@api/instance.ts';
import type { Option, Package, Point as _Point } from '@types';

type Point = Omit<_Point, 'id' | 'name'>;

export interface PostDeliveryCalcParams {
  package: Omit<Package, 'id' | 'name'>;
  senderPoint: Point;
  receiverPoint: Point;
}

export type PostDeliveryCalcConfig = RequestConfig<PostDeliveryCalcParams>;

interface PostDeliveryCalcResponse extends BaseResponse {
  options: Option[];
}

export const postDeliveryCalc = async ({ params, config }: PostDeliveryCalcConfig) =>
  api.post<PostDeliveryCalcResponse>('/delivery/calc', params, config);
