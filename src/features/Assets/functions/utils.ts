import type { EmbedBaseLinkCardProps } from '@/components/ui/EmbedBaseLinkCard/types';

import type { AssetData } from '../types';

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const getIndexFromHash = (hash: string): number => {
  switch (hash) {
    case '#zenn':
      return 1;
    case '#qiita':
      return 2;
    case '#note':
      return 3;
    case '#slides':
      return 4;
    default:
      return 0;
  }
};

export const isAsset = (value: AssetData | EmbedBaseLinkCardProps): value is AssetData => {
  return (value as AssetData).content !== undefined;
};
