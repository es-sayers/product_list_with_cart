'use client'
import ProductGrid from "./_components/ProductGrid";
import { productData } from "@/public/data/data";
import Cart from "./_components/Cart";
import { ProductContext } from "./_contexts/ProductContext";
import { CartContext } from "./_contexts/CartContext";
import { useState } from "react";
import { LineItemType } from "./_types/LineItemType";
import { OrderConfirmationContext } from "./_contexts/OrderConfirmationContext";
import OrderConfirmation from "./_components/OrderConfirmation";


export default function Home() {

  const [confirming, setConfirming] = useState(true);
  const [lines, setLines] = useState([] as LineItemType[]);

  return (
    <ProductContext.Provider value={productData}>
      <CartContext.Provider value={{ lines, setLines }}>
        <OrderConfirmationContext.Provider value={{ value: confirming, set: setConfirming }} >
          <main className="flex flex-col m-8 gap-12 justify-center lg:flex-row max-w-screen-2xl mx-auto">
            <div className="">
              <h1 className="text-4xl font-bold mb-8">Desserts</h1>
              <ProductGrid />
            </div>
            <Cart />
            {confirming ? <OrderConfirmation /> : <></>}
          </main >
        </OrderConfirmationContext.Provider>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}
