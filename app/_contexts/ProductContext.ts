import { createContext } from "react";
import { ProductType } from "../_types/ProductType";

export const ProductContext = createContext([] as ProductType[]);