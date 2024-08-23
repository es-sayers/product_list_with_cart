import { useContext } from "react";
import { ProductType } from "../_types/ProductType";
import { CartContext } from "../_contexts/CartContext";
import { LineItemType } from "../_types/LineItemType";
import { decrement, increment, quantityInCart } from "../_helpers/Cart";

export default function Product(props: { product: ProductType }) {

    const cart = useContext(CartContext);
    const quantity = quantityInCart(cart.lines, props.product.id);

    return (
        <div className="flex flex-col w-fit">
            <picture className={`w-full *:rounded-xl *:border-primary ${quantity > 0 ? "*:border-4" : ""}`}>
                <source media="(min-width: 768px)" srcSet={props.product.image.tablet} />
                <source media="(min-width: 1024px)" srcSet={props.product.image.desktop} />
                <img src={props.product.image.mobile} alt={props.product.name} />
            </picture>


            <div className="relative">

                <div
                    style={{ marginRight: '-25%', marginBottom: '-6.6667%', aspectRatio: '3.5/1' }}
                    className="grid place-items-center 
                                absolute right-1/2 bottom-full
                                w-1/2 min-w-fit px-2 *:size-full *:rounded-full">
                    {
                        quantity > 0
                            ?
                            <div className="flex items-center justify-between bg-primary text-white px-3">
                                <button onClick={() => { decrement(cart, props.product) }}>
                                    <img className="border border-white size-min aspect-square rounded-full p-1" src="/images/icon-decrement-quantity.svg" alt="Decrement quantity" />
                                </button>
                                <span className="text-lg" >{quantity}</span>
                                <button onClick={() => { increment(cart, props.product) }}>
                                    <img className=" border border-white size-min aspect-square rounded-full p-1" src="/images/icon-increment-quantity.svg" alt="Increment quantity" />
                                </button>
                            </div>
                            :
                            <button
                                onClick={() => { increment(cart, props.product) }}
                                className="grid place-items-center border border-primary *:font-semibold bg-white hover:text-primary">
                                <div className="flex gap-2 items-center">
                                    <img className="aspect-square w-6 lg:w-4" src="/images/icon-add-to-cart.svg" alt="" />
                                    <span className="lg:text-sm text-nowrap">Add to Cart</span>
                                </div >
                            </button>
                    }
                </div>



                <span className="text-gray-400 pt-8 block">{props.product.category}</span>
                <h2 className="text-lg">{props.product.name}</h2>
                <span className="text-primary text-lg before:content-['$']">{props.product.price.toFixed(2)}</span>
            </div>
        </div >
    );
}