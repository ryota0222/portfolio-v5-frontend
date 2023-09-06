import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { memo } from 'react';

import { SHIRT_LIST } from './constants';

import '@splidejs/splide/dist/css/splide.min.css';

export const ShirtWork = memo(() => (
  <div className="w-full mt-36 pb-12 relative">
    <div className="container mx-auto mb-12">
      <div className="max-w-4xl mx-auto my-8 w-full">
        <h3 className="font-bodoni text-black dark:text-white font-bold text-4xl md:text-6xl  w-[90vw] md:w-full mx-auto">
          T-shirts
        </h3>
        <p className="mt-4 text-black dark:text-white w-[90vw] md:w-full mx-auto">
          ユニクロの運営するUTme!にて販売中🎉 <br />
          ユニクロの服なので着心地もバツグンです✨
        </p>
      </div>
    </div>
    <section className="mb-16">
      <Splide
        aria-label="スタンプ一覧"
        options={{
          type: 'loop',
          gap: '2rem',
          autoWidth: true,
          arrows: false,
          pagination: false,
          pauseOnHover: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.2,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {SHIRT_LIST.map((sticker) => (
          <SplideSlide>
            <a href={sticker.url} target="_blank" rel="noopener noreferrer">
              <div className="w-[80vw] h-[80vw] md:w-80 md:h-80 hover:-translate-y-2 transition-all">
                <img src={sticker.image} alt="LINEスタンプ" />
                <span className="block text-center pt-2 text-black dark:text-white">{sticker.title}</span>
              </div>
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  </div>
));
