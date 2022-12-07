import axios from "axios";

const list = () => axios.get("/menu_card");

const create = payload =>
  axios.post("/menu_card", {
    menu_card: payload,
  });

const menuApi = {
  list,
  create,
};

export default menuApi;

