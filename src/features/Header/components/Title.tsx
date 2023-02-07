import { memo, useCallback, useEffect, useState } from 'react';

export const Title = memo(() => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => setIsSSR(false), []);
  if (isSSR)
    return (
      <h1 className="font-rokkitt font-bold text-black dark:text-white text-2xl">
        I'm <span className="bg-clip-text text-transparent bg-gradation-clip bg-cover">RyoTa.</span>
      </h1>
    );
  return <TitleClient />;
});

const TitleClient = memo(() => {
  const getDynamicText = useCallback(() => {
    if (window.location.hash === '#engineer') {
      return 'Design Engineer.';
    }
    if (window.location.hash === '#illustrator') {
      return 'Illustrator.';
    }
    return 'RyoTa.';
  }, []);
  const [dynamicText, setDynamicText] = useState(getDynamicText());
  // ハッシュの変更を検知してタイトルの更新
  window.addEventListener(
    'hashchange',
    () => {
      setDynamicText(getDynamicText());
    },
    false
  );
  return (
    <h1 className="font-rokkitt font-bold text-black dark:text-white text-2xl">
      I'm <span className="bg-clip-text text-transparent bg-gradation-clip bg-cover">{dynamicText}</span>
    </h1>
  );
});
