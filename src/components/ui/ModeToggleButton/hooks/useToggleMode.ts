import { useCallback, useEffect } from 'react';
import { createGlobalState, useLocalStorage } from 'react-use';

import { Mode } from '@/types/global';

type UseDarkMode = () => {
  isDarkMode: boolean;
  toggle: (isDark?: boolean) => void;
};

const theme = localStorage.getItem('theme');

const isInitialDark =
  theme !== null
    ? JSON.parse(theme) === Mode.dark
    : typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false;

export const useIsDarkMode = createGlobalState<boolean>(isInitialDark);

export const useDarkMode: UseDarkMode = () => {
  const [_, setValue] = useLocalStorage<Mode>('theme');
  const [isDarkMode, setIsDarkMode] = useIsDarkMode();
  // modeを切り替える
  const toggle = useCallback(
    (isDark?: boolean) => {
      const isNextDarkMode = typeof isDark === 'undefined' ? !isDarkMode : isDark;
      setIsDarkMode(isNextDarkMode);
      setValue(isNextDarkMode ? Mode.dark : Mode.light);
    },
    [isDarkMode, setValue]
  );
  // modeの変更時にhtmlタグのクラス名を変更
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggle };
};
