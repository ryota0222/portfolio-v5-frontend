import { memo } from 'react';

import { GitHub } from '@/components/ui/icons/GitHub';
import { Zenn } from '@/components/ui/icons/Zenn';
import { useIsDarkMode } from '@/components/ui/ModeToggleButton/hooks/useToggleMode';

export const LinkList = memo(() => {
  const [isDarkMode] = useIsDarkMode();
  return (
    <>
      <span role="presentation" className="hidden">
        {isDarkMode ? 'dark' : 'light'}
      </span>
      <dl className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800 flex flex-col">
        <dt className="visibility-hidden">リンク一覧</dt>
        <div className="flex justify-evenly flex-wrap">
          {/* Twitter */}
          <dd title="Twitter" aria-label="Twitter">
            <div className="h-full">
              <a
                href="https://twitter.com/RyoTa___0222"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <span role="img" aria-label="Twitter" className="flex items-center justify-center h-full">
                  <img
                    src="/images/logo-black.png"
                    alt="note"
                    width={32}
                    height={32}
                    loading="lazy"
                    style={{ filter: isDarkMode ? 'invert(1)' : undefined }}
                  />
                </span>
              </a>
            </div>
          </dd>
          {/* GitHub */}
          <dd title="GitHub" aria-label="GitHub">
            <div className="h-full">
              <a href="https://github.com/ryota0222" target="_blank" rel="noopener noreferrer" className="block h-full">
                <span role="img" aria-label="GitHub" className="flex items-center justify-center h-full">
                  <GitHub color={isDarkMode ? '#FFF' : '#222'} />
                </span>
              </a>
            </div>
          </dd>
          {/* Qiita */}
          <dd title="Qiita" aria-label="Qiita">
            <div className="h-full">
              <a href="https://qiita.com/RyoTa_0222" target="_blank" rel="noopener noreferrer" className="block h-full">
                <span role="img" aria-label="Qiita" className="flex items-center justify-center h-full">
                  <img src="/images/qiita.png" alt="Qiita" width={32} height={32} loading="lazy" />
                </span>
              </a>
            </div>
          </dd>
          {/* Zenn */}
          <dd aria-label="Zenn" title="Zenn">
            <a href="https://zenn.dev/ryota0222" target="_blank" rel="noopener noreferrer" className="block h-full">
              <span role="img" aria-label="Zenn" className="flex items-center justify-center h-full">
                <Zenn />
              </span>
            </a>
          </dd>
          {/* note */}
          <dd aria-label="note" title="note">
            <a href="https://note.com/ryotanny" target="_blank" rel="noopener noreferrer" className="block h-full">
              <span role="img" aria-label="note" className="flex items-center justify-center h-full">
                <img
                  src="/images/note.svg"
                  alt="note"
                  width={32}
                  height={32}
                  loading="lazy"
                  style={{ filter: isDarkMode ? 'invert(1)' : undefined }}
                />
              </span>
            </a>
          </dd>
        </div>
      </dl>
    </>
  );
});
