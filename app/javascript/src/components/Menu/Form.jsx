import React from "react";

const Form = ({ name, setName, price, setPrice, tax_rate, setTaxRate, menu, discount_item_id, setDiscountItem, discount_percentage, setDiscountPer, loading, handleSubmit }) => {
  const handleClick = e => {

    return null;
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Name
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            required={true}
            value={name}
            onChange={e => setName(e.target.value.slice(0, 50))}
            placeholder="Todo Title (Max 50 Characters Allowed)"
            // disabled={disabled}
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Price
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            required={true}
            value={price}
            onChange={e => setPrice(e.target.value)}
            placeholder="Price of the item"
            // disabled={disabled}
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Tax Rate(%)
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            required={true}
            value={tax_rate}
            onChange={e => setTaxRate(e.target.value)}
            placeholder="Tax rate in percentage"
            // disabled={disabled}
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Discounts
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <select 
            name="List of available items"
            // value={discount_item_id} 
            onChange={e => setDiscountItem(e.target.value)}>
              <option value=""> Select item which is on discount</option>
              {menu.map(item => {
                return <option value={item.id} key={item.id}> {item.name}</option>
              })}
          </select>

          <input
            type="text"
            value={discount_percentage}
            onChange={e => setDiscountPer(e.target.value)}
            placeholder="% discount"
            // disabled={disabled}
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          onClick={handleClick}
          disabled={loading}
          className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}
        >
          {loading ? "Loading..." : "Create Menu item"}
        </button>
      </div>
    </form>
  );
};

export default Form;
