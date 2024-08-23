import { useContext } from "react";
import { LineItemType } from "../_types/LineItemType";
import { CartContext } from "../_contexts/CartContext";
import { remove } from "../_helpers/Cart";

export default function LineItem(props: { line: LineItemType, includeThumbnail?: boolean, includeRemove?: boolean }) {

    const cart = useContext(CartContext);

    return (
        <li className="flex justify-between items-center gap-6  border-b border-gray-300 last:border-accent-100 py-4">
            {props.includeThumbnail && <img className="size-12 rounded-md" src={props.line.product.image.thumbnail} alt="" />}
            <div className="grow">
                <p className="font-semibold">{props.line.product.name}</p>
                <div className="flex flex-row w-fit gap-4">
                    <span className="text-primary">{props.line.quantity}x</span>
                    <span className="text-accent-300">@{props.line.product.price.toFixed(2)}</span>
                    <span className="">${(props.line.quantity * props.line.product.price).toFixed(2)}</span>
                </div>
            </div>
            <div>
                {props.includeRemove &&
                    <button onClick={() => remove(cart, props.line.product)}>
                        <img className="rounded-full border border-gray-500 p-0.5" src="/images/icon-remove-item.svg" alt="Remove item" />
                    </button>
                }
            </div>
        </li>
    );
}