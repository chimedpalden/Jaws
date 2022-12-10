import axios from "axios";

const create = payload =>
  axios.post("/orders", {
    order: payload,
  });

const show = id =>
  axios.get(`/order_items/${id}`);

const orderApi = {
  show,
  create,
};

export default orderApi;

