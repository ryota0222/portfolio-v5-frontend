import { useEffect, useState } from 'react';

import type { ReleaseData } from '../types';

export const getReleaseData = async (): Promise<ReleaseData[]> => {
  let data: ReleaseData[] = [];
  try {
    const res = await import(`../../../data/releases/releases.json`);
    data = res.default;
  } catch (err) {
    console.log(err);
  }
  return data;
};

type UseReleaseData = () => ReleaseData[];

export const useReleaseData: UseReleaseData = () => {
  const [releaseData, setReleaseData] = useState<ReleaseData[]>([]);
  useEffect(() => {
    void (async () => {
      setReleaseData(await getReleaseData());
    })();
  }, []);
  return releaseData;
};
