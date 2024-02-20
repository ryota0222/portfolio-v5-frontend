import { memo, useMemo } from 'react';
import dayjs from '@/lib/dayjs';

export const Introduction = memo(() => {
  const age = useMemo(() => {
    const birthdate = '1998-02-22';
    const date = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      age--;
    }

    return age;
  }, []);
  return (
    <div className="flex flex-col items-center gap-y-6">
      <img
        src="/images/profile-image.jpg"
        alt="プロフィール画像"
        className="w-[120px] h-[120px] rounded-full md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] object-cover"
        loading="lazy"
      />
      <div>
        <span
          className="font-rokkitt font-bold text-black dark:text-white text-3xl md:text-5xl lg:text-6xl"
          alia-label={`I'm りょーた`}
        >
          I'm <span className="bg-clip-text text-transparent bg-gradation-clip bg-cover">RyoTa.</span>
        </span>
      </div>
      <span className="font-bold text-black dark:text-white ">神戸在住の{age}歳のWebデザイナー兼エンジニア</span>
    </div>
  );
});
