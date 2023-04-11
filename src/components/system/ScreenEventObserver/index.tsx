import React, { memo, useRef } from 'react';

import { useOnScreen } from '@/hooks/useOnScreen';
import { useUpdateEffect } from '@/hooks/useUpdateEffect';

import { ScreenMode } from '@/types/global';

import type { PropsWithChildren } from 'react';

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
      history.pushState({}, '', `#${id}`);
    } else {
      if (id === 'engineer') {
        if (targetViewPosition === ScreenMode.BelowViewport && window.location.hash === hash) {
          history.pushState({}, '', location.pathname);
        } else if (targetViewPosition === ScreenMode.AboveViewport && window.location.hash === hash) {
          history.pushState({}, '', `#illustrator`);
        }
      } else if (id === 'illustrator') {
        if (targetViewPosition === ScreenMode.BelowViewport && window.location.hash === hash) {
          history.pushState({}, '', location.pathname);
        } else if (targetViewPosition === ScreenMode.AboveViewport && window.location.hash === hash) {
          history.pushState({}, '', `#subscribe`);
        }
      } else if (id === 'subscribe') {
        if (window.location.hash === hash) {
          history.pushState({}, '', location.pathname);
        }
      }
    }
  }, [targetViewPosition, isVisible]);
  return <div ref={scrollRef}>{children}</div>;
});
