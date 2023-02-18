import { useState } from 'react';

import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

import { type IHookStateSetAction, resolveHookState } from '@/misc/hookState';

export function createGlobalState<S = undefined>(initialState?: S): any {
  const store: {
    state: S;
    setState: (state: IHookStateSetAction<S>) => void;
    setters: any[];
  } = {
    state: initialState instanceof Function ? initialState() : initialState,
    setState(nextState: IHookStateSetAction<S>) {
      store.state = resolveHookState(nextState, store.state);
      store.setters.forEach((setter) => setter(store.state));
    },
    setters: [],
  };

  return () => {
    const [globalState, stateSetter] = useState<S | undefined>(store.state);

    useEffectOnce(() => () => {
      store.setters = store.setters.filter((setter) => setter !== stateSetter);
    });

    useIsomorphicLayoutEffect(() => {
      if (!store.setters.includes(stateSetter)) {
        store.setters.push(stateSetter);
      }
    });

    return [globalState, store.setState];
  };
}

export default createGlobalState;
