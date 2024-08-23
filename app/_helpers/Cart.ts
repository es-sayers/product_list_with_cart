import { LineItemType } from "../_types/LineItemType";
import { ProductType } from "../_types/ProductType";

export function increment(cart: { lines: LineItemType[], setLines: Function }, product: ProductType): void {

    if (quantityInCart(cart.lines, product.id) > 0) {
        cart.lines.forEach(line => {
            if (line.product.id === product.id) {
                line.quantity += 1;
            }
        });
    } else {
        cart.lines.push({ quantity: 1, product: product });
    }

    cart.setLines(cart.lines.slice());
}

export function decrement(cart: { lines: LineItemType[], setLines: Function }, product: ProductType): void {
    if (quantityInCart(cart.lines, product.id) > 0) {
        cart.lines.forEach((line, index) => {
            if (line.product.id === product.id) {
                line.quantity -= 1;
            }

            if (line.quantity <= 0) {
                cart.lines.splice(index, 1);
            }
        });

        cart.setLines(cart.lines.slice());
    }
}

export function remove(cart: { lines: LineItemType[], setLines: Function }, product: ProductType) {
    cart.lines.forEach((line, index) => {
        if (line.product.id === product.id) {
            cart.lines.splice(index, 1);
        }
    });

    cart.setLines(cart.lines.slice());
}


export function quantityInCart(lines: LineItemType[], productId: number): number {
    let match: LineItemType[] = lines.filter((line: LineItemType) => {
        if (line.product.id == productId) {
            return true;
        }
    });
    if (match.length > 0) {
        return match[0].quantity;
    }
    return 0;
}

export function orderTotal(lines: LineItemType[]): number {
    let orderTotal = 0;
    lines.forEach(line => orderTotal += line.quantity * line.product.price)
    return orderTotal;
}