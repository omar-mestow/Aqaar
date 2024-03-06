export const useMainToken = () => useState(() => []);
export const useRefreshMainToken = () => useState(() => []);
export const useToken = () => useState(() => []);

export const useMenusFooter = () => useState(() => []);
export const useSocialMenus = () => useState(() => []);

export const useUserInfo = () => useState(() => []);
export const useAccountType = () => useState(() => []);
export const useAllCources = () => useState(() => []);
export const useLang = () => useState(() => 'en');

export const useAuth = () => useState(() => ({
  isAuthenticated: false
}));
export const useUserId = () => useState(() => ({
  UserId: null
}));
export const useImageLouded = () => useState(() => ({
  loaded: false
}));
