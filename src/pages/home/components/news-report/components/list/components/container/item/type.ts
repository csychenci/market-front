export type NewsReportItemType = {
  id: string;
  title: string;
  content: string | null;
  sourceUrl: string | null;
  tags: string[] | null;
  images: unknown;
  summary: string | null;
  viewpoints: unknown;
  score: number | null;
  publishTime: string;
  createAt: string;
  updateAt: string;
}

export interface NewsReportItemProps {
  item: NewsReportItemType
  selectedItem: NewsReportItemType | null
  onSelect: (item: NewsReportItemType) => void
}