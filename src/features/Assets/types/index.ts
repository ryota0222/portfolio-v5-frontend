import type { EmbedBaseLinkCardProps } from '@/components/ui/EmbedBaseLinkCard/types';

export type AssetDataList = Record<string, Array<AssetData | EmbedBaseLinkCardProps>>;

export interface AssetData {
  title: string;
  content: string;
  url: string;
  date: string;
  thumbnail?: string;
  favicon: string;
  site: string;
}
