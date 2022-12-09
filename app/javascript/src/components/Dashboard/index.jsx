import React, { useState, useEffect } from "react";
import menuApi from "apis/menu";
import orderApi from "apis/order";
import { AddToCart } from "components/Cart/Add"

const Dashboard = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMenu = async () => {
    try {
      const {
        data: { products },
      } = await menuApi.list();
      setMenu(products);
      console.log(products)
      setLoading(false);
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        Loading...
      </div>
    );
  }

  const handleSubmit = async event => {
    // debugger
    // console.log(discount_item_id)
    event.preventDefault();
    setLoading(true);
    try {
      await orderApi.create({  });
      setLoading(false);
      history.push("/dashboard");
    } catch (error) {
      logger.error(error);
      setLoading(false);
    }
  };

  const handleClick = e => {
    console.log("helo")
  };

  return (
    <div class="container mx-auto px-4 pt-8">   
      <div class="grid grid-cols-4 gap-4">
        {menu.map(item => {
          return (
            // <div key={item.id}>{item.name}</div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.name}</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <AddToCart item={item} />
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  );

};

export default Dashboard;
