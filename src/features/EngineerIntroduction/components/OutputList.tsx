import { memo, useMemo } from 'react';
import { useAssetData } from '@/features/Assets/hooks/useAssetData';
import { AssetLinkCard } from '@/features/Assets/components/AssetLinkCard';
import { isAsset } from '@/features/Assets/functions/utils';
import dayjs from '@/lib/dayjs';

export const OutputList = memo(() => {
  const data = useAssetData();
  const targetData = useMemo(() => {
    if (data) {
      const flatList = [];
      if (data.zenn) {
        flatList.push(...data.zenn);
      }
      if (data.qiita) {
        flatList.push(...data.qiita);
      }
      if (data.note) {
        flatList.push(...data.note);
      }
      return flatList.sort((a, b) => dayjs(b.date).toDate() - dayjs(a.date).toDate()).slice(0, 3);
    } else {
      return [];
    }
  }, [data]);
  return (
    <>
      <ul className="flex flex-col w-full">
        {targetData.map((asset, idx) => (
          <li key={idx} className="pb-4">
            <AssetLinkCard
              {...asset}
              date={asset.date!}
              favicon={asset.favicon!}
              content={isAsset(asset) ? asset.content : asset.description}
              site={isAsset(asset) ? asset.site : asset.siteName}
            />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-center">
        <a
          href="/assets"
          className="inline-flex w-48 rounded-full font-bold py-3 bg-dark dark:bg-white justify-center text-white dark:text-black hover:scale-105 transition-transform cursor-pointer mt-4"
        >
          全て見る
        </a>
      </div>
    </>
  );
});
