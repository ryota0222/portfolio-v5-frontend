import { Player } from '@lottiefiles/react-lottie-player';
import { memo } from 'react';

import notificationAnimation from '@/constants/notification.json';

import { useNewsData } from './hooks/useNewsData';

export const NewsNotification = memo(() => {
  const data = useNewsData();
  if (data === null) return <div role="presentation" className="h-[62px]"></div>;
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
