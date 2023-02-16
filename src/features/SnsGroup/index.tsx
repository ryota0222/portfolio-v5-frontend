import { Player } from '@lottiefiles/react-lottie-player';
import { memo, useEffect, useRef, useState } from 'react';

import githubAnimation from '@/constants/github.json';
import instagramAnimation from '@/constants/instagram.json';
import twitterAnimation from '@/constants/twitter.json';

import { useHover } from '@/hooks/useHover';

import type { AnimationItem } from 'lottie-web';

export const SnsGroup = memo(() => {
  const dtRef = useRef<HTMLSpanElement | null>(null);
  const spRef = useRef<HTMLSpanElement | null>(null);
  const [lottieDtRef, setLottieDtRef] = useState<AnimationItem | null>(null);
  const [lottieSpRef, setLottieSpRef] = useState<AnimationItem | null>(null);
  const isDtInstagramIconHover = useHover(dtRef);
  const isSpInstagramIconHover = useHover(spRef);
  useEffect(() => {
    if (!isDtInstagramIconHover && lottieDtRef !== null) lottieDtRef.resetSegments(true);
  }, [isDtInstagramIconHover]);
  useEffect(() => {
    if (!isSpInstagramIconHover && lottieSpRef !== null) lottieSpRef.resetSegments(true);
  }, [isSpInstagramIconHover]);
  return (
    <>
      {/* desktop */}
      <div className="fixed bottom-20 right-8 md:flex flex-col gap-4 hidden z-50">
        <div className="rotate-90 h-36W mb-24">
          <span className="text-sm tracking-widest text-neutral-500 dark:text-neutral-300 font-bold relative after:content-[''] after:absolute after:left-full after:top-1/2 after:w-20 after:h-px after:bg-neutral-500 after:dark:bg-neutral-300 after:ml-2">
            SNS
          </span>
        </div>
        <a
          className="sns-animation-icon-wrapper"
          href="https://twitter.com/RyoTa___0222"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="Twitter">
            <Player
              src={twitterAnimation}
              style={{
                height: '32px',
                width: '32px',
              }}
              hover
              loop
            />
          </span>
        </a>
        <a
          className="sns-animation-icon-wrapper"
          href="https://github.com/ryota0222"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="GitHub">
            <Player
              src={githubAnimation}
              style={{
                height: '32px',
                width: '32px',
              }}
              hover
              loop
            />
          </span>
        </a>
        <a
          className="sns-animation-icon-wrapper"
          href="https://www.instagram.com/tobanai_penguin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="Instagram" ref={dtRef}>
            <Player
              src={instagramAnimation}
              lottieRef={(instance) => {
                setLottieDtRef(instance);
              }}
              style={{
                height: '32px',
                width: '32px',
              }}
              hover
              keepLastFrame
            />
          </span>
        </a>
      </div>
      {/* sp */}
      <div className="md:hidden flex-col gap-4 flex flex-col items-center">
        <span className="mb-4 text-sm tracking-widest text-neutral-500 dark:text-neutral-300 font-bold relative ">
          SNS
        </span>
        <div className="flex gap-4">
          <a
            className="sns-animation-icon-wrapper"
            href="https://twitter.com/RyoTa___0222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="Twitter">
              <Player
                src={twitterAnimation}
                style={{
                  height: '32px',
                  width: '32px',
                }}
                hover
                loop
              />
            </span>
          </a>
          <a
            className="sns-animation-icon-wrapper"
            href="https://github.com/ryota0222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="Instagram">
              <Player
                src={githubAnimation}
                style={{
                  height: '32px',
                  width: '32px',
                }}
                hover
                loop
              />
            </span>
          </a>
          <a
            className="sns-animation-icon-wrapper"
            href="https://www.instagram.com/tobanai_penguin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span role="img" aria-label="Instagram" ref={spRef}>
              <Player
                lottieRef={(instance) => {
                  setLottieSpRef(instance);
                }}
                src={instagramAnimation}
                style={{
                  height: '32px',
                  width: '32px',
                }}
                hover
                keepLastFrame
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
});
