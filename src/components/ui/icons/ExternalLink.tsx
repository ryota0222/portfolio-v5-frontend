import type { IconProps } from './types';

export const ExternalLink: React.FC<IconProps> = ({ width = 12, height = 12, color = 'black' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_219_100)">
        <path d="M2.25 0V9.75H12V0H2.25ZM11.0625 8.8125H3.1875V0.9375H11.0625V8.8125Z" fill={color} />
        <path d="M0.9375 11.0625V6.9375V3.1875V2.25H0V12H9.75V11.0625H8.8125H0.9375Z" fill={color} />
        <path
          d="M5.45654 7.33192L8.21886 4.56957V6.557H9.15636V2.96924H5.56861V3.90674H7.55602L4.7937 6.66906L5.45654 7.33192Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_219_100">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
