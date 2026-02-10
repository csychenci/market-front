export type NewsReportItemType = {
  id: number
  title: string;
  tags: string[];
  content: string;
  date: string;
  score: number;
}

export interface NewsReportItemProps {
  item: NewsReportItemType
  selectedItem: NewsReportItemType | null
  onSelect: (item: NewsReportItemType) => void
}