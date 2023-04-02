export interface News {
  id: string;
  title: string;
  url: string;
  period: string;
  publishedAt: string;
}

export interface Response {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
}
