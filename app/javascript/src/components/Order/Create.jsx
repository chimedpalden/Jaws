import React, { useState, useEffect } from "react";
import menuApi from "apis/menu";
import { Link } from "react-router-dom";

const Create = ({ history }) => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [tax_rate, setTaxRate] = useState("")
  // const [menu, setMenu] = useState([]);
  // const [discount_item_id, setDiscountItem] = useState("")
  // const [discount_percentage, setDiscountPer] = useState("")
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  const fetchMenu = async () => {
    try {
      const {
        data: { products },
      } = await menuApi.list();
      setMenu(products);
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
      history.push("/");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  return (
    <div>Create form
      {/*<Form setName={setName} setPrice={setPrice} setTaxRate={setTaxRate} menu={menu} discount_item_id setDiscountItem={setDiscountItem} setDiscountPer={setDiscountPer} loading={loading} handleSubmit={handleSubmit} />*/}
      <Link
        to={path}
        className="inline-flex items-center px-1 pt-1 mr-3
        font-semibold text-sm leading-5
        text-indigo-500 hover:text-indigo-500"
      >
        {iconClass && <i className={`${iconClass} text-bb-purple`}></i>}
        {name}
      </Link>
    </div>
  );
};

export default Create;
