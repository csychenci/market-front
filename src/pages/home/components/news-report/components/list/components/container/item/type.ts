export type NewsReportItemType = {
  id: string
  title: string;
  tags: string[];
  content: string;
  date: string;
  score: number;
}

export interface NewsReportItemProps {
  item: NewsReportItemType
}