import { create } from 'zustand';

type State = {
  tech: string;
};

type Action = {
  activateTech: (tech: State['tech']) => void;
};

export const techStore = create<State & Action>((set) => ({
  tech: '',
  activateTech: (selectedTech) => set(() => ({ tech: selectedTech })),
}));
