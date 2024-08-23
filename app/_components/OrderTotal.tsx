import { useContext } from "react";
import { CartContext } from "../_contexts/CartContext";
import { orderTotal } from "../_helpers/Cart";

export default function OrderTotal() {

    const cart = useContext(CartContext);
    const total = orderTotal(cart.lines);

    return (
        <div className="flex justify-between items-center">
            <span>Order Total</span>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
        </div>
    );
}