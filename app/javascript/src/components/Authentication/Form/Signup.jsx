import React from "react";
import { Link } from "react-router-dom";

const Signup = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  loading,
  setPasswordConfirmation,
}) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen px-4
    py-12 sm:px-6 lg:px-8 bg-gray-50 "
    >
      <div className="w-full max-w-md">
        <h2
          className="mt-6 text-3xl font-extrabold leading-9
        text-center text-gray-700"
        >
          Sign Up
        </h2>
        <div className="text-center">
          <Link
            to="/"
            className="mt-2 text-sm font-medium text-center
            text-bb-purple transition duration-150 ease-in-out
            focus:outline-none focus:underline"
          >
            Or Login Now
          </Link>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
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
                // value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Mike"
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
              Email
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                type="email"
                required={true}
                // value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="mike@example.com"
                className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium
                  leading-5 text-bb-gray-700"
            >
              Password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                type="password"
                required={true}
                // value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              className="block text-sm font-medium
                  leading-5 text-bb-gray-700"
            >
              Password Confirmation
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                type="password"
                required={true}
                // value={password}
                onChange={e => setPasswordConfirmation(e.target.value)}
                placeholder="Password Confirmation"
                className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="pt-8">
            <button
              type="submit"
              // onClick={handleClick}
              loading={loading}
              className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
