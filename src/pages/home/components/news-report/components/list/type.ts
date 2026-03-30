import type { NewsReportItemType } from "./components/container/item/type"

export type NewsReportListProps = {
  selectedItem: NewsReportItemType | null
  onSelect: (item: NewsReportItemType) => void
  onFavorite?: (item: NewsReportItemType) => void
}