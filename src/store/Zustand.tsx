import { create } from 'zustand'
import { type State } from '../types/stateTypes'

export const useStore = create<State>((set) => ({
  isDragging: false,
  setIsDragging: (inputBool: boolean) => set(() => ({isDragging: inputBool}))
}))