import { create } from "zustand";

export type AuthGetState = {
  isAuthenticated: boolean;
  user: string | null;
};

export type AuthSetState = {
  login: (user: string) => void;
  logout: () => void;
};

/**
 * 인증 상태를 관리하는 Zustand Store
 * 내부에서만 사용하는걸 권장하지만 어쩔수 없이 컴포넌트 외부에서 사용이 필요한경우 호출하시오
 */
export const _useAuthStore = create<AuthGetState & AuthSetState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (user) => set({ isAuthenticated: true, user }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export const useAuthGetState = <T>(selector: (state: Readonly<AuthGetState>) => T): T => _useAuthStore(selector);

export const useAuthSetState = <T>(selector: (state: Readonly<AuthSetState>) => T): T => _useAuthStore(selector);
