import { LineItemType } from "./LineItemType"

export type CartStateType = {
    lines: LineItemType[],
    setLines: Function
}
