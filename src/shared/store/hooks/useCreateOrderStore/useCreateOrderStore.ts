import { create } from 'zustand';

import type { Address } from '../../../types/Address.ts';
import type { Option } from '../../../types/Option.ts';
import type { Point } from '../../../types/Point.ts';
import type { User } from '../../../types/User.ts';

import type { Payer } from './types/payer.ts';
import type { Section } from './types/sections.ts';

interface CreateOrderState {
  section?: Section;
  options?: Option[];

  option?: Option;
  payer?: Payer;

  receiver?: Omit<User, 'id' | 'city' | 'email'>;
  sender?: Omit<User, 'id' | 'city' | 'email'>;

  senderPoint?: Point;
  senderAddress?: Address;

  receiverAddress?: Address;
  receiverPoint?: Point;
}

interface CreateOrderActions {
  setSection: (section: Section) => void;
  setOptions: (options: Option[]) => void;

  setOption: (option: Option) => void;
  setPayer: (payer: Payer) => void;

  setSender: (user: Omit<User, 'id' | 'city' | 'email'>) => void;
  setReceiver: (user: Omit<User, 'id' | 'city' | 'email'>) => void;

  setSenderPoint: (point: Point) => void;
  setSenderAddress: (address: Address) => void;

  setReceiverPoint: (point: Point) => void;
  setReceiverAddress: (address: Address) => void;

  clearOrderStore: () => void;
}

const initialState: CreateOrderState = {
  options: undefined,
  option: undefined,
  payer: undefined,
  receiverAddress: undefined,
  receiverPoint: undefined,
  section: undefined,
  senderAddress: undefined,
  receiver: undefined,
  sender: undefined,
};

export const useCreateOrderStore = create<CreateOrderState & CreateOrderActions>((set) => ({
  ...initialState,

  setSection: (section) => set(() => ({ section })),
  setOptions: (options) => set(() => ({ options, section: 'option' })),

  setOption: (option) => set(() => ({ option, section: 'receiver' })),
  setPayer: (payer) => set(() => ({ payer, section: 'checkOrder' })),

  setSender: (sender) => set(() => ({ sender, section: 'receiverAddress' })),
  setReceiver: (receiver) => set(() => ({ receiver, section: 'sender' })),

  setSenderPoint: (senderPoint) => set(() => ({ senderPoint })),
  setSenderAddress: (senderAddress) => set(() => ({ senderAddress, section: 'payer' })),

  setReceiverPoint: (receiverPoint) => set(() => ({ receiverPoint })),
  setReceiverAddress: (receiverAddress) =>
    set(() => ({ receiverAddress, section: 'senderAddress' })),

  clearOrderStore: () => {
    set(initialState);
  },
}));
