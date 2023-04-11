import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { getPWADisplayMode } from '@/misc/util';

export const PromotionInstallPWABanner = memo(() => {
  let deferredPrompt: Event | null = null;
  const [listOfInstalledApps, setListOfInstalledApps] = useState<Array<{
    platform: string;
    id: string;
    url: string;
    version: string;
  }> | null>(null);
  const [installed, setInstalled] = useState(false);
  const [isOff, setIsOff] = useState(false);
  const isDisplay = useMemo(
    () => getPWADisplayMode() === 'browser' && listOfInstalledApps?.length === 0 && !installed && !isOff,
    [getPWADisplayMode, listOfInstalledApps, installed, isOff]
  );
  useEffect(() => {
    void (async (): Promise<void> => {
      try {
        const list = await (navigator as any).getInstalledRelatedApps();
        if (typeof list === 'object') {
          setListOfInstalledApps(list);
          if (list.length === 0) {
            // イベントの登録
            // - beforeinstallpromptイベント
            window.addEventListener('beforeinstallprompt', (e) => {
              // Prevent the mini-infobar from appearing on mobile
              e.preventDefault();
              // Stash the event so it can be triggered later.
              deferredPrompt = e;
              // Optionally, send analytics event that PWA install promo was shown.
              console.log(`'beforeinstallprompt' event was fired.`);
            });
            // - appinstalledイベント
            window.addEventListener('appinstalled', () => {
              setInstalled(true);
              // Clear the deferredPrompt so it can be garbage collected
              deferredPrompt = null;
              // Optionally, send analytics event to indicate successful install
              console.log('PWA was installed');
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  // モーダルインストールダイアログの表示
  const showModalInstallDialog = useCallback(async () => {
    if (deferredPrompt !== null) {
      // Show the install prompt
      (deferredPrompt as any).prompt();
      // Wait for the user to respond to the prompt
      const { outcome } = await (deferredPrompt as any).userChoice;
      // Optionally, send analytics event with outcome of user choice
      console.log(`User response to the install prompt: ${outcome}`);
      // We've used the prompt, and can't use it again, throw it away
      deferredPrompt = null;
    }
  }, [deferredPrompt]);
  if (isDisplay) {
    return (
      <div className="bg-dark/80 dark:bg-black/60">
        <div className="flex py-2 container mx-auto text-xs px-2 text-white justify-between items-center">
          <span>ホーム画面にインストールしませんか？</span>
          <div className="flex gap-2 items-center">
            <button onClick={showModalInstallDialog} className="text-white bg-blue-500 py-2 px-3 rounded-full text-xs">
              インストール
            </button>
            <button aria-label="閉じる" onClick={() => setIsOff(true)}>
              <CloseCircleButton />
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
});

const CloseCircleButton = memo(() => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.5 1.78125C5.24393 1.78125 1.78125 5.24393 1.78125 9.5C1.78125 13.7561 5.24393 17.2188 9.5 17.2188C13.7561 17.2188 17.2188 13.7561 17.2188 9.5C17.2188 5.24393 13.7561 1.78125 9.5 1.78125ZM12.2947 11.4553C12.3522 11.5099 12.3981 11.5754 12.4298 11.648C12.4616 11.7207 12.4784 11.7989 12.4794 11.8781C12.4805 11.9574 12.4656 12.036 12.4357 12.1095C12.4059 12.1829 12.3616 12.2496 12.3056 12.3056C12.2496 12.3616 12.1829 12.4059 12.1095 12.4357C12.036 12.4656 11.9574 12.4805 11.8781 12.4794C11.7989 12.4784 11.7207 12.4616 11.648 12.4298C11.5754 12.3981 11.5099 12.3522 11.4553 12.2947L9.5 10.3398L7.54471 12.2947C7.43245 12.4014 7.28297 12.4599 7.12815 12.458C6.97332 12.456 6.82539 12.3936 6.7159 12.2841C6.60642 12.1746 6.54403 12.0267 6.54205 11.8719C6.54007 11.717 6.59864 11.5675 6.70529 11.4553L8.66021 9.5L6.70529 7.54471C6.59864 7.43245 6.54007 7.28297 6.54205 7.12815C6.54403 6.97332 6.60642 6.82539 6.7159 6.7159C6.82539 6.60642 6.97332 6.54403 7.12815 6.54205C7.28297 6.54007 7.43245 6.59864 7.54471 6.70529L9.5 8.66021L11.4553 6.70529C11.5675 6.59864 11.717 6.54007 11.8719 6.54205C12.0267 6.54403 12.1746 6.60642 12.2841 6.7159C12.3936 6.82539 12.456 6.97332 12.458 7.12815C12.4599 7.28297 12.4014 7.43245 12.2947 7.54471L10.3398 9.5L12.2947 11.4553Z"
      fill="white"
    />
  </svg>
));
