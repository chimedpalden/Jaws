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

  return (
    <div class="container mx-auto px-4 pt-8">   
      <div class="grid grid-cols-4 gap-4">
        {menu.map(product => {
          return (
            // <div key={product.id}>{product.name}</div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{product.name}</div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <AddToCart product={product} />
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  );

};

export default Dashboard;
