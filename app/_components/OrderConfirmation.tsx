import { useContext } from "react";
import OrderTotal from "./OrderTotal";
import PrimaryButton from "./PrimaryButton";
import { CartContext } from "../_contexts/CartContext";
import { OrderConfirmationContext } from "../_contexts/OrderConfirmationContext";
import LineItemOC from "./LineItemOC";

export default function OrderConfirmation() {

    const cart = useContext(CartContext);
    const confirmation = useContext(OrderConfirmationContext);

    return (
        <div className="flex flex-col justify-end lg:justify-center fixed size-full bottom-0 bg-gray-400 bg-opacity-80 z-10">
            <div className="min-h-24 max-h-1/6 lg:min-h-0" ></div>
            <div className="bg-white rounded-t-2xl p-8 lg:rounded-2xl max-w-screen-sm w-full mx-auto h-fit grow lg:grow-0" >
                <div className="flex flex-col gap-12 mx-auto max-w-1/2">
                    <div>
                        <img className="size-12 mb-4" src="/images/icon-order-confirmed.svg" alt="" />
                        <h2 className="text-4xl font-bold">Order Confirmed</h2>
                        <p className="text-sm text-accent-400">We hope you enjoy your food!</p>
                    </div>
                    <div className="bg-accent-50 p-4 rounded-md">
                        <ul className="mb-4">
                            {
                                cart.lines.map(line => {
                                    return <LineItemOC line={line} key={line.product.id} />
                                })
                            }
                        </ul>
                        <OrderTotal />
                    </div>
                    <PrimaryButton onClick={() => {
                        cart.setLines([]);
                        confirmation.set(false);
                    }}>Start New Order</PrimaryButton>
                </div>
            </div>
        </div>
    );
}