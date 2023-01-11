import create from "zustand";

interface Type {
  background: string;
  color: string;
  changeBackground: (val: string) => void;
  changeColor:(val: string) => void;
}

export const useModalStore = create<Type>((set) => ({
  background: "#fff",
  color: "#000",
  changeBackground: (val: string) => {
    set(() => ({
      background: val,
    }));
  },
  changeColor: (val: string) => {
    set(() => ({
      color: val,
    }));
  },
}));
