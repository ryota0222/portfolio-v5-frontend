import type { IconProps } from './types';

export const Twitter: React.FC<IconProps> = ({ width = 32, height = 26, color = 'white' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 26">
      <path
        d="M32 3.0821C30.8229 3.60272 29.5573 3.95675 28.2292 4.11293C29.5833 3.30076 30.625 2.01482 31.1146 0.48418C29.849 1.23388 28.4427 1.78054 26.9479 2.07729C25.75 0.801761 24.0417 0 22.1562 0C18.5312 0 15.5885 2.94153 15.5885 6.56508C15.5885 7.0805 15.6458 7.5803 15.7604 8.05927C10.3021 7.78855 5.46354 5.17501 2.22917 1.20264C1.66146 2.171 1.33854 3.30076 1.33854 4.5034C1.33854 6.77853 2.49479 8.78815 4.26042 9.96476C3.18229 9.92831 2.17188 9.63676 1.28646 9.14217C1.28646 9.17341 1.28646 9.19944 1.28646 9.22547C1.28646 12.4065 3.54688 15.0617 6.55208 15.6604C6 15.8114 5.42188 15.8947 4.82292 15.8947C4.40104 15.8947 3.98437 15.853 3.58854 15.7749C4.42187 18.3833 6.84896 20.2783 9.71875 20.3356C7.47396 22.0953 4.64062 23.1418 1.56771 23.1418C1.03646 23.1418 0.515625 23.1105 0 23.0481C2.90625 24.9119 6.35417 26 10.0625 26C22.1406 26 28.7448 15.9988 28.7448 7.32519C28.7448 7.04405 28.7344 6.75771 28.724 6.47657C30.0052 5.54986 31.1198 4.39407 32 3.0821Z"
        fill={color}
      />
    </svg>
  );
};