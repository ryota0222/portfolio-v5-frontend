import { Player } from '@lottiefiles/react-lottie-player';
import { memo, useEffect, useRef, useState } from 'react';

import { useDarkMode } from './hooks/useToggleMode';

export const ModeToggleButton = memo(() => {
  const { isDarkMode, toggle } = useDarkMode();
  const [_, setRendered] = useState(false);
  const ref = useRef<Player>(null);
  useEffect(() => {
    if (ref.current !== null) {
      if (isDarkMode) {
        ref.current.setSeeker(0);
        ref.current.setPlayerDirection(1);
        ref.current.play();
        setTimeout(() => {
          if (ref.current !== null) ref.current.pause();
        }, 1500);
      } else {
        ref.current.setSeeker(90);
        ref.current.setPlayerDirection(-1);
        ref.current.play();
      }
    }
  }, [isDarkMode, ref.current]);
  return (
    <button
      onClick={() => toggle()}
      className="w-8 h-8 md:w-12 md:h-12 rounded border border-slate-300 dark:border-slate-400 overflow-hidden bg-white dark:bg-dark relative hover:scale-105 transition-transform"
      aria-label="change Mode"
    >
      <Player
        ref={ref}
        id="mode-toggle"
        lottieRef={() => setRendered(true)}
        src="https://assets4.lottiefiles.com/private_files/lf30_jim7okck.json"
        style={{
          height: '80px',
          width: '80px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </button>
  );
});
