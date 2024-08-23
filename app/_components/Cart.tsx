import { useContext, useState } from "react";
import { CartContext } from "../_contexts/CartContext";
import OrderTotal from "./OrderTotal";
import PrimaryButton from "./PrimaryButton";
import { OrderConfirmationContext } from "../_contexts/OrderConfirmationContext";
import LineItem from "./LineItem";

export default function Cart() {

    const confirmation = useContext(OrderConfirmationContext);
    const cart = useContext(CartContext);

    return (
        <div className="grid gap-8 h-min min-w-fit w-full sm:w-2/3 lg:w-1/5 bg-gray-50 p-4 rounded-md">
            <h2 className="text-primary text-3xl text-nowrap">Your Cart ({cart.lines.length})</h2>
            {
                cart.lines.length === 0 ?
                    <><img className="aspect-square mx-auto" src="/images/illustration-empty-cart.svg" alt="" />
                        <p className="text-accent-500 text-center ">Your added items will appear here</p></>
                    :
                    <>
                        <ul>
                            {
                                cart.lines.map(line => {
                                    return <LineItem line={line} key={line.product.id} />
                                })
                            }
                        </ul>
                        <OrderTotal />
                        <div className="flex items-center bg-accent-100 p-4">
                            <img src="/images/icon-carbon-neutral.svg" alt="" />
                            <p className="text-center text-sm text-nowrap">This is a <strong>carbon-neutral</strong> delivery</p>
                        </div>
                        <PrimaryButton onClick={() => confirmation.set(true)} >Confirm Order</PrimaryButton>
                    </>
            }

        </div>
    );
}