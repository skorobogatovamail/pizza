import { create } from 'zustand';

interface State {
    activeId: number;
    setActiveId: (activeId: number) => void
}

export const useStore = create<State>(
    (set) => (
        {
            activeId: 0,
            setActiveId: (newActiveId) => set({ activeId: newActiveId })
        }
    )
)