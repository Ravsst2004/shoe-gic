import RegistrationForm from "../../components/ui/Auth/RegistrationForm";
import Layouts from "../../components/layouts/Layouts";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <Layouts>
      <div className="py-20 flex flex-col justify-center sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            <Link
              to="/login"
              className="font-medium text-red-600 hover:text-red-400 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              login to your account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </Layouts>
  );
}
