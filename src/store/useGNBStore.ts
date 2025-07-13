import { create } from "zustand";

type GNBGetState = {
  isShowPrevButton: boolean;
  isShowMainButton: boolean;
  mainButtonTitle: React.ReactNode;
  mainButtonClickHandler: () => void;
};

type GNBSetState = {
  setIsShowPrevButton: (isShowPrevButton: boolean) => void;
  setIsShowMainButton: (isShowMainButton: boolean) => void;
  setMainButtonTitle: (mainButtonTitle: React.ReactNode) => void;
  setMainButtonClickHandler: (mainButtonClickHandler: () => void) => void;
};

const _useGNBStore = create<GNBGetState & GNBSetState>((set) => ({
  isShowPrevButton: false,
  isShowMainButton: false,
  mainButtonTitle: "",
  mainButtonClickHandler: () => {},
  setIsShowPrevButton: (isShowPrevButton) => set({ isShowPrevButton }),
  setIsShowMainButton: (isShowMainButton) => set({ isShowMainButton }),
  setMainButtonTitle: (mainButtonTitle) => set({ mainButtonTitle }),
  setMainButtonClickHandler: (mainButtonClickHandler) => set({ mainButtonClickHandler }),
}));

export const useGNBGetState = <T>(selector: (state: Readonly<GNBGetState>) => T): T => _useGNBStore(selector);

export const useGNBSetState = <T>(selector: (state: Readonly<GNBSetState>) => T): T => _useGNBStore(selector);
