import { useIsDarkMode } from '@/components/ui/ModeToggleButton/hooks/useToggleMode';
import React, { memo } from 'react';
import UseAnimations from 'react-useanimations';
import scrollDown from 'react-useanimations/lib/scrollDown';

export const ScrollDown = memo(() => {
  const [isDarkMode] = useIsDarkMode();
  return (
    <span aria-label="下にスクロール" role="presentation" className="flex flex-col items-center gap-2">
      <UseAnimations strokeColor={isDarkMode ? '#71717a' : '#d4d4d8'} size={32} animation={scrollDown} />
      <span className="text-xs dark:text-zinc-400 text-zinc-500">scroll</span>
    </span>
  );
});
