import { memo } from 'react';
import UseAnimations from 'react-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import github from 'react-useanimations/lib/github';
import twitter from 'react-useanimations/lib/twitter';
import instagram from 'react-useanimations/lib/instagram';
import { useIsDarkMode } from '@/components/ui/ModeToggleButton/hooks/useToggleMode';

export const SnsGroup = memo(() => {
  const [isDarkMode] = useIsDarkMode();
  return (
    <>
      {/* desktop */}
      <div className="fixed bottom-20 right-8 md:flex flex-col gap-4 hidden z-50">
        <div className="rotate-90 h-36W mb-24">
          <span className="text-sm tracking-widest text-neutral-500 dark:text-neutral-300 font-bold relative after:content-[''] after:absolute after:left-full after:top-1/2 after:w-20 after:h-px after:bg-neutral-500 after:dark:bg-neutral-300 after:ml-2">
            SNS
          </span>
        </div>
        <a href="https://twitter.com/RyoTa___0222" target="_blank" rel="noopener noreferrer">
          <UseAnimations strokeColor={isDarkMode ? '#d6d3d1' : '#78716c'} size={32} animation={twitter} />
        </a>
        <a href="https://github.com/ryota0222" target="_blank" rel="noopener noreferrer">
          <UseAnimations strokeColor={isDarkMode ? '#d6d3d1' : '#78716c'} size={32} animation={github} />
        </a>
        <a href="https://www.instagram.com/tobanai_penguin" target="_blank" rel="noopener noreferrer">
          <UseAnimations strokeColor={isDarkMode ? '#d6d3d1' : '#78716c'} size={32} animation={instagram} />
        </a>
      </div>
      {/* sp */}
      <div className="md:hidden flex-col gap-4 flex flex-col items-center">
        <span className="mb-4 text-sm tracking-widest text-neutral-500 dark:text-neutral-300 font-bold relative ">
          SNS
        </span>
        <div className="flex gap-4">
          <a href="https://twitter.com/RyoTa___0222" target="_blank" rel="noopener noreferrer">
            <UseAnimations strokeColor={isDarkMode ? '#d6d3d1' : '#78716c'} size={32} animation={twitter} />
          </a>
          <a href="https://github.com/ryota0222" target="_blank" rel="noopener noreferrer">
            <UseAnimations strokeColor={isDarkMode ? '#d6d3d1' : '#78716c'} size={32} animation={github} />
          </a>
          <a href="https://www.instagram.com/tobanai_penguin" target="_blank" rel="noopener noreferrer">
            <UseAnimations strokeColor={isDarkMode ? '#d6d3d1' : '#78716c'} size={32} animation={instagram} />
          </a>
        </div>
      </div>
    </>
  );
});
