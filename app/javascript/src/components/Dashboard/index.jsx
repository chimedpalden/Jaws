import React, { useState, useEffect } from "react";
import menuApi from "apis/menu";

const Dashboard = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchMenu();
  }, []);

  const MenuList = () => (
    <ul>
      {menu.map(item => {
        return <li key={item.id}>{item.name}</li>
      })}
    </ul>
  );

  if (loading) {
    return (
      <div className="w-screen h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard here</h1>
      <MenuList />
    </div>
  );

};

export default Dashboard;
