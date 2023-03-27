export type AssetDataList = Record<string, AssetData[]>;

export interface AssetData {
  title: string;
  content: string;
  url: string;
  date: string;
  thumbnail?: string;
  favicon: string;
  site: string;
}
