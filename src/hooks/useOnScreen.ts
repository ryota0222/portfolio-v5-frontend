import { useState, useEffect } from 'react';
import { ScreenMode } from '@/types/global';

export type UseOnScreen = (targetRef: React.RefObject<HTMLElement>) => {
  isVisible: boolean;
  isAboveViewport: boolean;
  isBelowViewport: boolean;
  targetViewPosition?: ScreenMode;
};

export const useOnScreen: UseOnScreen = (targetRef) => {
  const [targetViewPosition, setTargetViewPosition] = useState<ScreenMode | undefined>(undefined);

  const observer = (() => {
    if (typeof window !== 'undefined') {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTargetViewPosition(ScreenMode.Visible); // 画面内に表示中
            return;
          }
          if (entry.boundingClientRect.top > 0) {
            setTargetViewPosition(ScreenMode.BelowViewport); // 画面より下に表示中
          } else {
            setTargetViewPosition(ScreenMode.AboveViewport); // 画面より上に表示中
          }
        },
        {
          root: null,
          threshold: 0,
        }
      );
    }
  })();

  useEffect(() => {
    // マウント時にobserverを登録
    if (targetRef.current !== null) observer?.observe(targetRef.current);

    // アンマウント時にobserverを解除
    return () => {
      observer?.disconnect();
    };
  }, []);

  return {
    isVisible: targetViewPosition === ScreenMode.Visible,
    isAboveViewport: targetViewPosition === ScreenMode.AboveViewport,
    isBelowViewport: targetViewPosition === ScreenMode.BelowViewport,
    targetViewPosition,
  };
};
