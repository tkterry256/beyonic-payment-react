import { create } from "zustand";

const useStore = create((set) => ({
  order: null,
  makePayment: ({ product, quantity }) => set({ order: { product, quantity } }),
  clearPayment: () => set({ order: null }),
}));

export { useStore };
