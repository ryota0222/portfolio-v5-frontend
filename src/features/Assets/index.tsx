import { Tab } from '@headlessui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import loadingAnimation from '@/constants/loading.json';

import { SLIDE_LIST } from '../EngineerIntroduction/constants';

import { AssetLinkCard } from './components/AssetLinkCard';
import { FigmaCard } from './components/FigmaCard';
import { capitalize, classNames, getIndexFromHash, isAsset } from './functions/utils';
import { useAssetData } from './hooks/useAssetData';

import type { AssetDataList } from './types';

import { isBrowser } from '@/misc/util';

export const Assets = memo(() => {
  const data = useAssetData();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpened, setOpened] = useState(false);
  const open = useCallback(() => {
    setOpened(true);
    if (dialogRef.current !== null) {
      dialogRef.current.showModal();
    }
  }, [dialogRef]);
  const close = useCallback(() => {
    setOpened(false);
    // queryを削除
    const pathname = window.location.pathname;
    let hash = window.location.hash;
    if (hash.includes('?')) {
      hash = hash.split('?')[0];
    }
    history.pushState({}, '', `${pathname}${hash}`);
    if (dialogRef.current !== null) {
      dialogRef.current.close();
    }
  }, [dialogRef]);
  const getSlideUrl = useCallback((date: string) => {
    const slide = SLIDE_LIST.find((slide) => slide.date === date);
    return slide?.url ?? '';
  }, []);
  const [selectedIndex, setSelectedIndex] = useState(getIndexFromHash(isBrowser ? window.location.hash : ''));
  const [categories, setCategories] = useState<AssetDataList | null>(null);
  useEffect(() => {
    if (data !== null) {
      setCategories({
        all: [...data.note, ...data.qiita, ...data.zenn].sort((pre, next) => (pre.date! > next.date! ? -1 : 1)),
        ...data,
        slides: SLIDE_LIST,
      });
    }
  }, [data]);
  // タブの変更によるハッシュ値の変更
  useEffect(() => {
    if (
      isBrowser &&
      categories !== null &&
      selectedIndex > 0 &&
      selectedIndex !== getIndexFromHash(window.location.hash)
    ) {
      history.pushState({}, '', `assets#${Object.keys(categories)[selectedIndex]}`);
    }
  }, [selectedIndex]);
  useEffect(() => {
    if (isBrowser) {
      const pathname = window.location.href;
      console.log(dialogRef.current);
      if (pathname.split('?open=')[1] !== undefined) {
        setTimeout(() => {
          open();
        }, 100);
      }
    }
  }, [isBrowser, dialogRef]);
  if (categories === null)
    return (
      <div className="h-[40vh] flex items-center justify-center">
        <span className="loading-animation-icon-wrapper">
          <Player
            id="loading"
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
                    'w-full rounded-full py-2 text-sm font-medium leading-5',
                    'ring-opacity-0 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-dark text-white dark:bg-white dark:text-dark shadow'
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
                      {asset.url.includes('figma.com') ? (
                        <FigmaCard
                          {...asset}
                          date={asset.date!}
                          favicon={asset.favicon!}
                          content={isAsset(asset) ? asset.content : asset.description}
                          site={isAsset(asset) ? asset.site : asset.siteName}
                          open={open}
                        />
                      ) : (
                        <AssetLinkCard
                          {...asset}
                          date={asset.date!}
                          favicon={asset.favicon!}
                          content={isAsset(asset) ? asset.content : asset.description}
                          site={isAsset(asset) ? asset.site : asset.siteName}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div
        className={`${isOpened ? 'z-[99] w-screen h-screen bg-black/[.6] fixed top-0 left-0' : 'w-0 h-0 opacity-0'}`}
        onClick={close}
      >
        <dialog ref={dialogRef} className="w-[90vw] h-[90vh] p-0">
          {isBrowser && (
            <iframe
              width="100%"
              height="100%"
              src={getSlideUrl(window.location.href.split('?open=')[1])}
              allowFullScreen
            ></iframe>
          )}
        </dialog>
      </div>
    </>
  );
});
