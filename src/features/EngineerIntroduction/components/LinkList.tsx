import { GitHub } from '@/components/ui/icons/GitHub';
import { Note } from '@/components/ui/icons/Note';
import { Qiita } from '@/components/ui/icons/Qiita';
import { Twitter } from '@/components/ui/icons/Twitter';
import { Zenn } from '@/components/ui/icons/Zenn';
import { useIsDarkMode } from '@/components/ui/ModeToggleButton/hooks/useToggleMode';
import { memo } from 'react';

export const LinkList = memo(() => {
  const [isDarkMode] = useIsDarkMode();
  return (
    <dl className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800 flex flex-col gap-4">
      <dt className="invisible h-0">リンク一覧</dt>
      <span role="presentation" className="hidden">
        {isDarkMode ? 'dark' : 'light'}
      </span>
      <div className="flex justify-evenly flex-wrap">
        {/* Twitter */}
        <a href="https://twitter.com/RyoTa___0222" target="_blank" rel="noopener noreferrer">
          <dd aria-label="Twitter" title="Twitter">
            <Twitter color="#1DA1F2" />
          </dd>
        </a>
        {/* GitHub */}
        <a href="https://github.com/ryota0222" target="_blank" rel="noopener noreferrer">
          <dd aria-label="GitHub" title="GitHub">
            <GitHub color={isDarkMode ? '#FFF' : '#222'} />
          </dd>
        </a>
        {/* Qiita */}
        <a href="https://qiita.com/RyoTa_0222" target="_blank" rel="noopener noreferrer">
          <dd aria-label="Qiita" title="Qiita">
            <Qiita color={isDarkMode ? '#FFF' : '#000'} />
          </dd>
        </a>
        {/* Zenn */}
        <a href="https://zenn.dev/ryota0222" target="_blank" rel="noopener noreferrer">
          <dd aria-label="Zenn" title="Zenn">
            <Zenn />
          </dd>
        </a>
        {/* Note */}
        <a href="https://note.com/ryotanny" target="_blank" rel="noopener noreferrer">
          <dd aria-label="Note" title="Note">
            <Note color={isDarkMode ? '#FFF' : '#000'} />
          </dd>
        </a>
        {/* つながる勉強会 */}
        <a href="https://www.notion.so/31469dcb91b245d1b5e1de8e0e4b3b4b" target="_blank" rel="noopener noreferrer">
          <dd aria-label="つながる勉強会" title="つながる勉強会">
            <img src="/images/tsunagaru.png" alt="つながる勉強会" width={32} height={32} />
          </dd>
        </a>
      </div>
    </dl>
  );
});
