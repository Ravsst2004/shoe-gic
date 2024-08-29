import React from "react";
import Input from "../Input";
import Button from "../Button";

export default function RegistrationForm() {
  return (
    <form>
      <Input
        label="Name"
        placeholder="Full Name"
        type="email"
        labelClassName={"block font-medium leading-5 text-gray-700"}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />

      <Input
        label="Username"
        placeholder="Username"
        type="email"
        labelClassName={"mt-6 block font-medium leading-5 text-gray-700"}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />

      <Input
        label="Email address"
        placeholder="user@gmail.com"
        type="email"
        labelClassName={"mt-6 block font-medium leading-5 text-gray-700"}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />

      <Input
        label="Password"
        placeholder="******"
        required=""
        type="password"
        labelClassName={"mt-6 block font-medium leading-5 text-gray-700"}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />

      <Input
        label="Confirm Password"
        placeholder="******"
        required=""
        type="password"
        labelClassName={"mt-6 block font-medium leading-5 text-gray-700"}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-red focus:border-red-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      />

      <div className="mt-6">
        <span className="block w-full rounded-md shadow-sm">
          <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
            Create account
          </button>
        </span>
      </div>
    </form>
  );
}
