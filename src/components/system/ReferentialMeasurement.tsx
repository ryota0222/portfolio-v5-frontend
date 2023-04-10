import { memo, useEffect } from 'react';

import { isBrowser } from '@/misc/util';

export const ReferentialMeasurement: React.FC = memo(() => {
  useEffect(() => {
    if (isBrowser) {
      const ref = document.referrer;
      console.log(
        `%c参照元%c あなたは%c${ref.length > 0 ? ref : '参照元なし'}%cからきました`,
        'color:white; background-color:purple; padding:2px; border-radius:4px;',
        '',
        'color:red;',
        ''
      );
      // service workerの登録
      if ('serviceWorker' in navigator) {
        void navigator.serviceWorker.register('/serviceWorker.js');
      }
    }
  }, []);
  return <></>;
});
