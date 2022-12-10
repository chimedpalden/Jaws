const setToLocalStorage = ({ authToken, email, userId, userName, currentOrder }) => {
  localStorage.setItem("authToken", JSON.stringify(authToken));
  localStorage.setItem("authEmail", JSON.stringify(email));
  localStorage.setItem("authUserId", JSON.stringify(userId));
  localStorage.setItem("authUserName", JSON.stringify(userName));
  localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
};

const getFromLocalStorage = key => {
  let response = "";
  try {
    const value = localStorage.getItem(key);
    response = value ? JSON.parse(value) : "";
  } catch (error) {
    logger.error(error);
    response = "";
  }
  return response;
};

export { setToLocalStorage, getFromLocalStorage };
