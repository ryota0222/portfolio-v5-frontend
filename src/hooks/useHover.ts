import { type RefObject, useEffect, useState } from 'react';

import { off, on } from '@/misc/util';

type UseHover = (ref: RefObject<Element>, enabled?: boolean) => boolean;

// kudos: https://usehooks.com/
export const useHover: UseHover = (ref, enabled = true) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const onMouseOver = (): void => setValue(true);
    const onMouseOut = (): void => setValue(false);

    if (enabled && ref.current != null) {
      on(ref.current, 'mouseover', onMouseOver);
      on(ref.current, 'mouseout', onMouseOut);
    }

    // fixes react-hooks/exhaustive-deps warning about stale ref elements
    const { current } = ref;

    return () => {
      if (enabled && current != null) {
        off(current, 'mouseover', onMouseOver);
        off(current, 'mouseout', onMouseOut);
      }
    };
  }, [enabled, ref]);

  return value;
};
