import type { IconProps } from './types';

export const GitHub: React.FC<IconProps> = ({ width = 32, height = 32, color = '#222222' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.999 0.333252C7.16398 0.333252 0 7.52463 0 16.3977C0 23.4937 4.58399 29.5145 10.943 31.6389C11.743 31.7865 12.035 31.2905 12.035 30.8648C12.035 30.4833 12.021 29.4733 12.013 28.133C7.56198 29.1038 6.62301 25.9795 6.62301 25.9795C5.89601 24.1242 4.84701 23.6302 4.84701 23.6302C3.39401 22.6333 4.95699 22.6534 4.95699 22.6534C6.56199 22.7668 7.40698 24.3089 7.40698 24.3089C8.83498 26.7636 11.152 26.0548 12.064 25.6432C12.209 24.6051 12.623 23.8973 13.08 23.4957C9.527 23.0901 5.79199 21.7127 5.79199 15.5574C5.79199 13.8034 6.41501 12.3698 7.43901 11.2463C7.27401 10.8397 6.72501 9.2073 7.59501 6.99556C7.59501 6.99556 8.939 6.56384 11.995 8.64205C13.272 8.28564 14.64 8.10794 16.001 8.10091C17.36 8.10794 18.729 8.28564 20.007 8.64205C23.061 6.56384 24.402 6.99556 24.402 6.99556C25.275 9.2073 24.726 10.8397 24.561 11.2463C25.587 12.3698 26.206 13.8034 26.206 15.5574C26.206 21.7277 22.465 23.0861 18.901 23.4836C19.475 23.9796 19.987 24.9595 19.987 26.4584C19.987 28.6059 19.967 30.3377 19.967 30.8648C19.967 31.2945 20.255 31.7945 21.067 31.6368C27.42 29.5084 32 23.4917 32 16.3977C32 7.52463 24.836 0.333252 15.999 0.333252Z"
        fill={color}
      />
    </svg>
  );
};
