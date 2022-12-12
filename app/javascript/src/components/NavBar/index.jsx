import React from "react";
import NavItem from "./NavItem";
import authApi from "apis/auth";
import { resetAuthTokens } from "src/apis/axios";
import { either, isEmpty, isNil } from "ramda";
import { getFromLocalStorage, setToLocalStorage } from "utils/storage";

const NavBar = () => {
  const userName = getFromLocalStorage("authUserName");
  const authToken = getFromLocalStorage("authToken");
  const isLoggedIn = !either(isNil, isEmpty)(authToken);
  const handleLogout = async () => {
    try {
      await authApi.logout();
      setToLocalStorage({
        authToken: null,
        email: null,
        userId: null,
        userName: null,
        currentOrder: null,
      });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  const LogOut = () => {
    // console.log(authToken)
    if (authToken) {
      return(
        <a
          onClick={handleLogout}
          className="inline-flex items-center px-1 pt-1 text-sm
          font-semibold leading-5 text-bb-gray-600 text-opacity-50
          transition duration-150 ease-in-out border-b-2
          border-transparent hover:text-bb-gray-600 focus:outline-none
          focus:text-bb-gray-700 cursor-pointer"
        >
          LogOut
        </a>
      )
    }
  }

  const Info = () => {
    if (authToken) {
      return(
        <>
          <NavItem name="Message" path="/messages" />
          <NavItem name="Cart" path="/cart" />
        </>
      )
    }
  }

  const MenuInfo = () => {
    if (authToken) {
      return(
        <>
          <NavItem name="MenuCard" path="/dashboard" />
          <NavItem
            name="Add"
            iconClass="ri-add-fill"
            path="/products/create"
          />
        </>
      )
    }
  }

  return (
    <nav className="bg-white shadow">
      <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="hidden lg:flex">
              <MenuInfo />
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-4">
            <Info />
            <span
              className="inline-flex items-center px-2 pt-1 text-sm font-regular leading-5 text-bb-gray-600
              text-opacity-50 transition duration-150 ease-in-out border-b-2 border-transparent focus:outline-none
              focus:text-bb-gray-700"
            >
              {userName}
            </span>
            <LogOut />
                
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
