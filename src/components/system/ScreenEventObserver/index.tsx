import { useOnScreen } from '@/hooks/useOnScreen';
import { ScreenMode } from '@/types/global';
import React, { memo, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { useUpdateEffect } from '@/hooks/useUpdateEffect';

interface Props {
  id: string;
}

export const ScreenEventObserver: React.FC<PropsWithChildren<Props>> = memo(({ id, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { targetViewPosition, isVisible } = useOnScreen(scrollRef);
  useUpdateEffect(() => {
    if (targetViewPosition === undefined) return;
    const hash = `#${id}`;
    if (isVisible && window.location.hash !== hash) {
      window.location.hash = `#${id}`;
    } else {
      if (id === 'illustrator') {
        if (window.location.hash === hash) {
          window.location.hash = `#engineer`;
        }
      } else if (id === 'engineer') {
        if (targetViewPosition === ScreenMode.BelowViewport && window.location.hash === hash) {
          window.location.hash = ``;
        } else if (targetViewPosition === ScreenMode.AboveViewport && window.location.hash === hash) {
          window.location.hash = `#illustrator`;
        }
      }
    }
  }, [targetViewPosition, isVisible]);
  return <div ref={scrollRef}>{children}</div>;
});
