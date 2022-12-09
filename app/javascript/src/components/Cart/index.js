import React from "react";
import ReactDOM from "react-dom";
import { CartProvider, useCart } from "react-use-cart";

const Page = () => {
  const { addItem, inCart, setCartMetadata } = useCart();

  const products = [
    {
      id: 1,
      name: "Malm",
      price: 14500
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500
    }
  ];

  return (
    <div>
      <button onClick={() => setCartMetadata({ hello: "world" })}>
        Set metadata
      </button>
      {products.map((p) => {
        const alreadyAdded = inCart(p.id);

        return (
          <div key={p.id}>
            <button onClick={() => addItem(p)}>
              {alreadyAdded ? "Add again" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

const Cart = () => {
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    metadata
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>
        Cart ({totalUniqueItems} - {cartTotal})
      </h1>

      <pre>{JSON.stringify(metadata, null, 2)}</pre>

      {!isEmpty && <button onClick={emptyCart}>Empty cart</button>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name}
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>Remove &times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

const ShoppingCart = () => {
  return (
    <>
      <CartProvider
        id="jamie"
        onItemAdd={(item) => console.log(`Item ${item.id} added!`)}
        onItemUpdate={(item) => console.log(`Item ${item.id} updated.!`)}
        onItemRemove={() => console.log(`Item removed!`)}
      >
        <Cart />
        <Page />
      </CartProvider>
    </>
  );
}

export { ShoppingCart };

