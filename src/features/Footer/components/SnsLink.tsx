import { memo } from 'react';

import { GitHub } from '@/components/ui/icons/GitHub';
import { Instagram } from '@/components/ui/icons/Instagram';
import { Note } from '@/components/ui/icons/Note';
import { Twitter } from '@/components/ui/icons/Twitter';
import { useIsDarkMode } from '@/components/ui/ModeToggleButton/hooks/useToggleMode';

export const SnsLink = memo(() => {
  const [isDarkMode] = useIsDarkMode();
  return (
    <>
      <span className="hidden">{isDarkMode ? 'dark' : 'light'}</span>
      <div className="flex gap-4">
        <a href="https://twitter.com/RyoTa___0222" title="Twitter" target="_blank" rel="noopener noreferrer">
          <Twitter color="#1DA1F2" width={20} height={20} />
        </a>
        <a
          href="https://www.instagram.com/tobanai_penguin/"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram width={20} height={20} />
        </a>
        <a href="https://note.com/ryotanny" title="Note" target="_blank" rel="noopener noreferrer">
          <Note width={20} height={20} color={isDarkMode ? '#FFF' : '#000'} />
        </a>
        <a href="https://github.com/ryota0222" title="GitHub" target="_blank" rel="noopener noreferrer">
          <GitHub width={20} height={20} color={isDarkMode ? '#FFF' : '#222'} />
        </a>
      </div>
    </>
  );
});
