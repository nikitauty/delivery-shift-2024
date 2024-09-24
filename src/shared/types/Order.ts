import type { Address } from './Address';
import type { Option } from './Option';
import type { Point } from './Point';
import type { User as _User } from './User';

type User = Omit<_User, 'id' | 'email' | 'city'>;

export interface Order {
  _id: string;
  senderPoint: Point;
  senderAddress: Address;
  sender: User;
  receiverPoint: Point;
  receiverAddress: Address;
  receiver: User;
  payer: 'SENDER' | 'RECEIVER';
  option: Option;
  status: 0;
  cancellable: true;
}
