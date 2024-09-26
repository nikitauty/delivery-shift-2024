import { create } from 'zustand';

import type { Point } from '../../types/Point';

interface CitiesState {
  cities?: Point[];
}

interface CitiesActions {
  setCities: (cities: Point[]) => void;
}

const initialState: CitiesState = {
  cities: undefined,
};

export const useCitiesStore = create<CitiesState & CitiesActions>((set) => ({
  ...initialState,

  setCities: (newCitiesData) => {
    set(() => ({ cities: newCitiesData }));
  },
}));
