import { memo } from 'react';

import dayjs from '@/lib/dayjs';

import type { AssetData } from '../types';

export interface Props extends AssetData {}

export const AssetLinkCard: React.FC<Props> = memo(({ title, url, date, favicon, thumbnail, site }) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="flex items-center w-full border dark:border-zinc-500 hover:bg-zinc-50 hover:dark:bg-zinc-800 rounded overflow-hidden h-[120px]"
    >
      <div className="p-4 flex-1 overflow-hidden">
        <h1 className="font-bold text-sm md:text-md text-black dark:text-white">{title}</h1>
        <div className="text-sm my-2 text-black dark:text-white line-clamp-2 opacity-80">
          {dayjs(date).format('YYYY/MM/DD')}
        </div>
        <div className="overflow-hidden text-xs text-ellipsis whitespace-nowrap text-black/80 dark:text-white/80">
          <img src={favicon} className="mr-1 inline-block" alt="favicon" width={14} height={14} loading="lazy" />
          {site}
        </div>
      </div>
      {typeof thumbnail === 'string' && (
        <div className="h-[90px] max-w-[180px] md:h-[120px] md:max-w-[230px] hidden md:block">
          <img src={thumbnail} alt={title} className="w-full h-full" width={230} height={120} loading="lazy" />
        </div>
      )}
    </a>
  );
});
