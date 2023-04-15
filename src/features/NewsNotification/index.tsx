import { Player } from '@lottiefiles/react-lottie-player';
import { memo, useEffect, useMemo } from 'react';

import notificationAnimation from '@/constants/notification.json';

import dayjs from '@/lib/dayjs';

import { useNewsData } from './hooks/useNewsData';

import { isNavigator } from '@/misc/util';

export const NewsNotification = memo(() => {
  const data = useNewsData();
  // 指定の期限より前かどうか
  const isBefore = useMemo(() => {
    let value = false;
    if (data !== null) {
      value = dayjs().isBefore(dayjs(data?.period));
    }
    return value;
  }, [data]);
  // 通知を削除する
  useEffect(() => {
    if (isNavigator && 'clearAppBadge' in navigator) {
      (navigator as any)
        .clearAppBadge()
        .then(() => console.log('clear app badge'))
        .catch((err: any) => console.log(err));
    }
  }, []);
  if (data === null || !isBefore) return <div role="presentation" className="h-[62px]"></div>;
  return (
    <div className="text-white min-w-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 flex justify-between items-center w-11/12 md:w-fit md:min-w-[500px] news-notification-hue-transition">
      <span className="notification-animation-icon-wrapper">
        <Player
          id="notification-bell"
          src={notificationAnimation}
          style={{
            height: '24px',
            width: '24px',
            color: 'white',
          }}
          autoplay
          loop
        />
      </span>
      <span className="flex-1 text-sm md:text-md pl-2">{data.title}</span>
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block p-2 border border-white rounded-full text-sm px-4"
      >
        詳しく見る
      </a>
    </div>
  );
});
