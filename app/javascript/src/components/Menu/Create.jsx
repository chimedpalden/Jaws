import React, { useState, useEffect } from "react";
import Form from "./Form";
import menuApi from "apis/menu";

const Create = ({ history }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tax_rate, setTaxRate] = useState("")
  const [menu, setMenu] = useState([]);
  const [discount_item_id, setDiscountItem] = useState("")
  const [discount_percentage, setDiscountPer] = useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const {
        data: { menu },
      } = await menuApi.list();
      setMenu(menu);
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const handleSubmit = async event => {
    // debugger
    // console.log(discount_item_id)
    event.preventDefault();
    setLoading(true);
    try {
      await menuApi.create({ name, price, tax_rate, deals_attributes: [{discounted_menu_item_id: discount_item_id, discount_percentage}] });
      setLoading(false);
      history.push("/dashboard");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <div>Create form
      <Form setName={setName} setPrice={setPrice} setTaxRate={setTaxRate} menu={menu} discount_item_id setDiscountItem={setDiscountItem} setDiscountPer={setDiscountPer} loading={loading} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Create;
