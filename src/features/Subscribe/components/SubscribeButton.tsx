import { Player } from '@lottiefiles/react-lottie-player';
import { memo, useRef, useState, useEffect, useMemo, useCallback } from 'react';

import alertAnimation from '@/constants/alert.json';
import notificationAnimation from '@/constants/notification.json';

import { useHover } from '@/hooks/useHover';

import { useNotification } from '../hooks/useNotification';

import type { AnimationItem } from 'lottie-web';

export const SubscribeButton = memo(() => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { permission, requestPermission, isRequesting } = useNotification();
  const isHover = useHover(ref);
  const [lottieRef, setLottieRef] = useState<AnimationItem | null>(null);
  const label = useMemo(() => {
    if (isRequesting) return 'リクエスト中';
    switch (permission) {
      case 'not-supported':
        return 'プッシュ通知がサポートされていません';
      case 'denied':
        return 'プッシュ通知を拒否されました';
      case 'granted':
        return 'ありがたく通知させていただきます';
      case 'default':
      default:
        return '通知を受け取る';
    }
  }, [permission]);
  const disabled = useMemo(() => {
    return ['not-supported', 'denied', 'granted'].includes(permission) || isRequesting;
  }, [permission]);
  const handleClick = useCallback(() => {
    if (!disabled) requestPermission();
  }, [disabled]);
  useEffect(() => {
    if (lottieRef !== null) {
      isHover ? lottieRef.play() : lottieRef.stop();
    }
  }, [isHover]);
  return (
    <button
      className="flex border rounded-full py-2 px-16 md:py-4 text-sm md:text-base w-full justify-center items-center gap-4 bg-white/60 dark:bg-dark/60 backdrop-blur-[4px] backdrop-saturate-[180%]"
      ref={ref}
      onClick={handleClick}
      disabled={disabled}
    >
      <span role="presentation" className="notification-animation-icon-wrapper gray">
        {permission === 'default' || permission === 'granted' ? (
          <Player
            id="subscribe-notification"
            lottieRef={(instance) => {
              setLottieRef(instance);
            }}
            src={notificationAnimation}
            style={{
              height: '32px',
              width: '32px',
            }}
            loop
          />
        ) : (
          <Player
            id="alert"
            src={alertAnimation}
            style={{
              height: '32px',
              width: '32px',
            }}
            loop
            autoplay
          />
        )}
      </span>
      {label}
    </button>
  );
});
