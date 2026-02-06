import type { NewsReportItemType } from "./components/container/item/type"

export type NewsReportListProps = {
  selectedItem: NewsReportItemType
  onSelect: (item: NewsReportItemType) => void
}