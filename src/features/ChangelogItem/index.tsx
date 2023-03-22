import { memo } from 'react';

import { LinkifyComponent } from '@/components/ui/LinkifyComponent';

import dayjs from '@/lib/dayjs';

interface Props {
  /**
   * タイトル
   */
  title: string;
  /**
   * 作成日
   */
  createdAt: string;
  /**
   * 詳細データ
   */
  detail: string;
  /**
   * リンク
   */
  url: string;
}

export const ChangelogItem: React.FC<Props> = memo(({ title, createdAt, detail, url }) => {
  return (
    <li className="list-none p-4 border-b border-zinc-300 mb-2 changelog-item-wrapper dark:text-white">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full link-wrapper">
        <h3 className="text-lg font-bold dark:text-white">{title}</h3>
        <time className="text-sm text-zinc-400 block my-1">{dayjs(createdAt).format('YYYY/MM/DD')}</time>
        <p className="break-words whitespace-pre-line text-sm dark:text-white">
          <LinkifyComponent>{detail}</LinkifyComponent>
        </p>
      </a>
    </li>
  );
});
