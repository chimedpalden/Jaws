import axios from "axios";

const create = payload =>
  axios.post("/orders", {
    order: payload,
  });

const orderApi = {
  create,
};

export default orderApi;

