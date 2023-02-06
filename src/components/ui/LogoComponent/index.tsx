import { memo } from 'react';

import { useIsDarkMode } from '@/components/ui/ModeToggleButton/hooks/useToggleMode';

import { Logo } from '../icons/Logo';

export const LogoComponent = memo(() => {
  const [isDarkMode] = useIsDarkMode();
  return (
    <span className="bg-dark dark:bg-white inline-flex justify-center items-center p-2 rounded-full w-10 h-10">
      <>
        <span className="hidden">{isDarkMode ? 'dark' : 'light'}</span>
        <Logo color={isDarkMode ? '#000' : '#FFF'} />
      </>
    </span>
  );
});
