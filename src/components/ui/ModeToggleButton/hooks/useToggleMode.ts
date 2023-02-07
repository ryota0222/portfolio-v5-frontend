import { useCallback, useEffect } from 'react';

import { Mode } from '@/types/global';
import { isBrowser } from '@/misc/util';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import createGlobalState from '@/factory/createGlobalState';

type UseDarkMode = () => {
  isDarkMode: boolean;
  toggle: (isDark?: boolean) => void;
};

const theme = localStorage.getItem('theme');

const isInitialDark =
  theme !== null
    ? JSON.parse(theme) === Mode.Dark
    : isBrowser
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
      setValue(isNextDarkMode ? Mode.Dark : Mode.Light);
    },
    [isDarkMode, setValue]
  );
  // modeの変更時にhtmlタグのクラス名を変更
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.background = '#333333';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.background = '#FFFFFF';
    }
  }, [isDarkMode]);

  return { isDarkMode, toggle };
};
