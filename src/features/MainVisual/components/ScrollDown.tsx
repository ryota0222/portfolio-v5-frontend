import { Player } from '@lottiefiles/react-lottie-player';
import { memo } from 'react';

import scrollDownAnimation from '@/constants/scroll-down.json';

export const ScrollDown = memo(() => {
  return (
    <span
      aria-label="下にスクロール"
      role="presentation"
      className="flex flex-col items-center gap-2 scroll-animation-icon-wrapper"
    >
      <Player
        id="scroll-down"
        src={scrollDownAnimation}
        style={{
          height: '32px',
          width: '32px',
        }}
        autoplay
        loop
      />

      <span className="text-xs dark:text-zinc-400 text-zinc-500">scroll</span>
    </span>
  );
});
