import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import orderApi from "apis/order";
import { getFromLocalStorage, setToLocalStorage } from "utils/storage";

const Page = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const currentOrder = getFromLocalStorage("currentOrder");
  const [quantity, setQuantity] = useState(1);
  const [bill, setBill] = useState(product.price);

  useEffect(() => {
    fetchCart();
  }, []);

  useEffect(() => {
    setBill(quantity * product.price)
  }, [quantity]);

  const fetchCart = async () => {
    // console.log(currentOrder)
    if (currentOrder) {
      try {
        // const response = await orderApi.show(product.id);
        const {
          data: { quantity, product_id },
        } = await orderApi.show(product.id);
        console.log(quantity)

        setQuantity(quantity);
        setLoading(false);
      } catch (error) {
        console.log(error)
        logger.error(error);
        setLoading(false);
      }
    }
  }

  const handleClick = async product => {
    setLoading(true);
    try {

      const response = await orderApi.create({
        order_items: [{
          product_id: product.id,
          quantity: quantity
        }],
      });

      setToLocalStorage({
        currentOrder: response.data.id,
      });

      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const Buy = () => {
    return (
      <button
        type="submit"
        onClick={() => handleClick(product)}
        disabled={loading}
        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}
      >
      {loading ? "loading..." : "Add to cart"}
      </button>
    )
  }

  const subQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      // setBill(quantity * product.price)
    }
  }

  const addQuantity = () => {
    setQuantity(quantity + 1)
    // setBill(quantity * product.price)
  }

  return (
    <div>
      <Buy />
      <div class="inline-flex">
        <button 
          onClick={() => addQuantity()}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          +
        </button>
        <button 
          onClick={() => subQuantity() }
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          -
        </button>
      </div>
      <div class="flex justify-between text-base font-medium text-gray-900 pt-4">
        <h3>
          <p class="text-gray-500">Qty {quantity}</p>
        </h3>
        <p class="ml-4">${bill}</p>
      </div>

    </div>
  );
}

const AddToCart = ({ product }) => {
  return (
    <>
      <Page product = {product} />
    </>
  );
}

export { AddToCart };

