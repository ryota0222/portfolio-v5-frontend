import { Tab } from '@headlessui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { memo, useEffect, useState } from 'react';

import loadingAnimation from '@/constants/loading.json';

import { SLIDE_LIST } from '../EngineerIntroduction/constants';

import { AssetLinkCard } from './components/AssetLinkCard';
import { capitalize, classNames, getIndexFromHash, isAsset } from './functions/utils';
import { useAssetData } from './hooks/useAssetData';

import type { AssetDataList } from './types';

export const Assets = memo(() => {
  const data = useAssetData();
  const [selectedIndex, setSelectedIndex] = useState(
    getIndexFromHash(typeof window !== 'undefined' ? window.location.hash : '')
  );
  const [categories, setCategories] = useState<AssetDataList | null>(null);
  useEffect(() => {
    if (data !== null) {
      setCategories({
        all: [...data.note, ...data.zenn, ...data.zenn].sort((pre, next) => (pre.date! > next.date! ? -1 : 1)),
        ...data,
        slides: SLIDE_LIST,
      });
    }
  }, [data]);
  // タブの変更によるハッシュ値の変更
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      categories !== null &&
      selectedIndex > 0 &&
      selectedIndex !== getIndexFromHash(window.location.hash)
    ) {
      history.pushState({}, '', `assets#${Object.keys(categories)[selectedIndex]}`);
    }
  }, [selectedIndex]);
  if (categories === null)
    return (
      <div className="h-[40vh] flex items-center justify-center">
        <span className="loading-animation-icon-wrapper">
          <Player
            src={loadingAnimation}
            style={{
              height: '32px',
              width: '32px',
            }}
            autoplay
            loop
          />
        </span>
      </div>
    );
  return (
    <>
      <div className="w-full px-2 mx-auto">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-1 rounded-full bg-zinc-200/20 p-1 max-w-md mx-auto">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-2 text-sm font-medium leading-5 text-white',
                    'ring-opacity-0 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-dark dark:bg-white dark:text-dark shadow'
                      : 'text-black dark:text-white hover:bg-zinc-400/[0.12] hover:text-zinc-80'
                  )
                }
              >
                {capitalize(category)}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            {Object.values(categories).map((assets, idx) => (
              <Tab.Panel key={idx}>
                <ul>
                  {assets.map((asset, idx) => (
                    <li key={idx} className="py-4">
                      <AssetLinkCard
                        {...asset}
                        date={asset.date!}
                        favicon={asset.favicon!}
                        content={isAsset(asset) ? asset.content : asset.description}
                        site={isAsset(asset) ? asset.site : ''}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
});
