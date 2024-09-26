import { create } from 'zustand';

import type { User } from '../../types/User';

interface UserState {
  user?: User;
  isLoggedIn: boolean;
}

interface UserActions {
  initUser: (user: User) => void;
  setUserData: (user: User) => void;
  clearUser: () => void;
}

const initialState: UserState = {
  user: { id: '1', phone: '111' },
  isLoggedIn: false,
};

export const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  initUser: (user) => {
    set({ user });
    set({ isLoggedIn: true });
  },

  setUserData: (newUserData) => {
    set(() => ({ user: { ...newUserData } }));
  },

  clearUser: () => {
    set(initialState);
  },
}));
