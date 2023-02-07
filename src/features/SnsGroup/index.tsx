import { memo } from 'react';
import githubAnimation from '@/constants/github.json';
import twitterAnimation from '@/constants/twitter.json';
import instagramAnimation from '@/constants/instagram.json';
import { Player } from '@lottiefiles/react-lottie-player';

export const SnsGroup = memo(() => {
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
          <Player
            src={twitterAnimation}
            style={{
              height: '32px',
              width: '32px',
            }}
            hover
          />
        </a>
        <a
          className="sns-animation-icon-wrapper"
          href="https://github.com/ryota0222"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Player
            src={githubAnimation}
            style={{
              height: '32px',
              width: '32px',
            }}
            hover
          />
        </a>
        <a
          className="sns-animation-icon-wrapper"
          href="https://www.instagram.com/tobanai_penguin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Player
            src={instagramAnimation}
            style={{
              height: '32px',
              width: '32px',
            }}
            hover
          />
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
            <Player
              src={twitterAnimation}
              style={{
                height: '32px',
                width: '32px',
              }}
              hover
            />
          </a>
          <a
            className="sns-animation-icon-wrapper"
            href="https://github.com/ryota0222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Player
              src={instagramAnimation}
              style={{
                height: '32px',
                width: '32px',
              }}
              hover
            />
          </a>
          <a
            className="sns-animation-icon-wrapper"
            href="https://www.instagram.com/tobanai_penguin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Player
              src={instagramAnimation}
              style={{
                height: '32px',
                width: '32px',
              }}
              hover
            />
          </a>
        </div>
      </div>
    </>
  );
});
