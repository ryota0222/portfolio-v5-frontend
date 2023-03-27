import { useEffect, useState } from 'react';

import type { AssetDataList } from '../types';

export const getAssetData = async (): Promise<AssetDataList | null> => {
  let data: AssetDataList | null = null;
  try {
    const res = await import(`../../../data/rss.json`);
    data = res.default;
  } catch (err) {
    console.log(err);
  }
  return data;
};

type UseAssetData = () => AssetDataList | null;

export const useAssetData: UseAssetData = () => {
  const [assetData, setAssetData] = useState<AssetDataList | null>(null);
  useEffect(() => {
    void (async () => {
      setAssetData(await getAssetData());
    })();
  }, []);
  return assetData;
};
