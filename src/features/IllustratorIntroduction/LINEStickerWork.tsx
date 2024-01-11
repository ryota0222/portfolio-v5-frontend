import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { memo } from 'react';

import { LINE_STICKERS_MAPPING } from './constants';

import '@splidejs/splide/dist/css/splide.min.css';

export const LINEStickerWork = memo(() => (
  <div className="w-full mt-36 pb-10 relative">
    <div className="container mx-auto mb-10">
      <div className="max-w-4xl mx-auto my-8 w-full">
        <h3 className="font-bodoni text-black dark:text-white font-bold text-4xl md:text-6xl text-right w-[90vw] md:w-full mx-auto">
          LINE Stickers
        </h3>
      </div>
    </div>
    <section className="mb-16">
      <div className="container mx-auto mb-4">
        <h4 className="text-black dark:text-white font-bold text-lg w-full pl-4 lg:pl-0">飛ばないペンギン</h4>
      </div>
      <Splide
        aria-label="スタンプ一覧"
        options={{
          type: 'loop',
          gap: '1rem',
          autoWidth: true,
          arrows: false,
          pagination: false,
          pauseOnHover: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.4,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {LINE_STICKERS_MAPPING.penguin.map((sticker) => (
          <SplideSlide>
            <a href={sticker.url} target="_blank" rel="noopener noreferrer" className="w-28 h-28 md:w-40 md:h-40">
              <div className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-lg border border-zinc-300 hover:border-zinc-500 hover:-translate-y-2 transition-all dark:hover:border-zinc-100 flex items-center">
                <img src={sticker.image} alt="LINEスタンプ" />
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
    <section className="my-8">
      <div className="container mx-auto mb-4">
        <h4 className="text-black dark:text-white font-bold text-lg w-full pl-4 lg:pl-0">えもじん</h4>
      </div>
      <Splide
        aria-label="スタンプ一覧"
        options={{
          type: 'loop',
          gap: '1rem',
          autoWidth: true,
          arrows: false,
          pagination: false,
          pauseOnHover: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: -0.4,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {LINE_STICKERS_MAPPING.emojin.map((sticker) => (
          <SplideSlide>
            <a href={sticker.url} target="_blank" rel="noopener noreferrer" className="w-28 h-28 md:w-40 md:h-40">
              <div className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-lg border border-zinc-300 hover:border-zinc-500 hover:-translate-y-2 transition-all dark:hover:border-zinc-100 flex items-center">
                <img src={sticker.image} alt="LINEスタンプ" />
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
    <section className="my-8">
      <div className="container mx-auto mb-4">
        <h4 className="text-black dark:text-white font-bold text-lg w-full pl-4 lg:pl-0">ひよっこエンジニア</h4>
      </div>
      <Splide
        aria-label="スタンプ一覧"
        options={{
          type: 'loop',
          gap: '1rem',
          autoWidth: true,
          arrows: false,
          pagination: false,
          pauseOnHover: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.4,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {LINE_STICKERS_MAPPING.piyoen.map((sticker) => (
          <SplideSlide>
            <a href={sticker.url} target="_blank" rel="noopener noreferrer" className="w-28 h-28 md:w-40 md:h-40">
              <div className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-lg border border-zinc-300 hover:border-zinc-500 hover:-translate-y-2 transition-all dark:hover:border-zinc-100 flex items-center">
                <img src={sticker.image} alt="LINEスタンプ" />
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
    <section className="my-8">
      <div className="container mx-auto mb-4">
        <h4 className="text-black dark:text-white font-bold text-lg w-full pl-4 lg:pl-0">まんまる おとこのこ</h4>
      </div>
      <Splide
        aria-label="スタンプ一覧"
        options={{
          type: 'loop',
          gap: '1rem',
          autoWidth: true,
          arrows: false,
          pagination: false,
          pauseOnHover: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: -0.4,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {LINE_STICKERS_MAPPING.otokonoko.map((sticker) => (
          <SplideSlide>
            <a href={sticker.url} target="_blank" rel="noopener noreferrer" className="w-28 h-28 md:w-40 md:h-40">
              <div className="w-28 h-28 md:w-40 md:h-40 bg-white rounded-lg border border-zinc-300 hover:border-zinc-500 hover:-translate-y-2 transition-all dark:hover:border-zinc-100 flex items-center">
                <img src={sticker.image} alt="LINEスタンプ" />
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  </div>
));
