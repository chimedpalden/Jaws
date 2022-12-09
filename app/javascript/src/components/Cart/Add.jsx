import React from "react";
import ReactDOM from "react-dom";
import { CartProvider, useCart } from "react-use-cart";
import orderApi from "apis/order";

const Page = ({ item }) => {
  const { addItem, inCart, setCartMetadata } = useCart();
  const alreadyAdded = inCart(item.id);

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 14500
    }
  ];

  const handleClick = (item) => {
    console.log(item.id)
    // addItem(item)
  };

  return (
    <div>
      <button onClick={() => setCartMetadata({ hello: "world" })}>
        Set metadata {item.name}
      </button>
      <button
        type="submit"
        onClick={() => handleClick(item)}
        // disabled={loading}
        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}
      >
        { alreadyAdded ? "Add again" : "Add to Cart"}
      </button>
      {/*{products.map((p) => {
        const alreadyAdded = inCart(p.id);

        return (
          <div key={p.id}>
            <button onClick={() => addItem(p)}>
              {alreadyAdded ? "Add again" : "Add to Cart"}
            </button>
          </div>
        );
      })}*/}
    </div>
  );
}

const AddToCart = ({ item }) => {
  return (
    <>
      <CartProvider
        id="jamie"
        onItemAdd={(item) => console.log(`Item ${item.id} added!`)}
        onItemUpdate={(item) => console.log(`Item ${item.id} updated.!`)}
        onItemRemove={() => console.log(`Item removed!`)}
      >
        <Page item = {item} />
      </CartProvider>
    </>
  );
}

export { AddToCart };

