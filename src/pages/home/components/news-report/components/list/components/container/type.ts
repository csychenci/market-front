import { type NewsReportItemType } from "./item/type";

export type NewsReportContainerProps = {
  selectedItem: NewsReportItemType | null
  items: NewsReportItemType[]
  onSelect: (item: NewsReportItemType) => void
}