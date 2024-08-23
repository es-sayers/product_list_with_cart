import { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "../_contexts/ProductContext";

export default function ProductGrid() {
    const products = useContext(ProductContext)

    return (
        <div className="grid grid-cols-1 gap-8 max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            {
                products.map(product => {
                    return <Product key={product.id} product={product} />
                })
            }
        </div>
    );
}