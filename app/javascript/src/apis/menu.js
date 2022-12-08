import axios from "axios";

const list = () => axios.get("/products");

const create = payload =>
  axios.post("/products", {
    product: payload,
  });

const menuApi = {
  list,
  create,
};

export default menuApi;

