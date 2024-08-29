import React from "react";
import Layouts from "../../components/layouts/Layouts";
import Input from "../../components/ui/Input";
import LoginForm from "../../components/ui/Auth/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Layouts>
      <div className="py-20 flex flex-col justify-center sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-red-500 max-w">
            <Link
              to="/registration"
              className="font-medium text-red-500 hover:text-red-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              create a new acccount
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </Layouts>
  );
}
