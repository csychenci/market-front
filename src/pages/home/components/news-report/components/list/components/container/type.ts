import { type NewsReportItemType } from "./item/type";

export type NewsReportContainerProps = {
  selectedItem: NewsReportItemType
  items: NewsReportItemType[]
  onSelect: (item: NewsReportItemType) => void
}