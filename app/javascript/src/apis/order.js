import axios from "axios";

const create = payload =>
  axios.post("/orders", {
    order: payload,
  });

const show = id =>
  axios.get(`/order_items/${id}`);

const cart = id =>
  axios.get(`/orders/${id}`);

const orderApi = {
  show,
  create,
  cart,
};

export default orderApi;

