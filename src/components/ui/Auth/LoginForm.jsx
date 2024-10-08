import Input from "../Input";
import Button from "../Button";

export default function LoginForm() {
  return (
    <form>
      <Input
        label="Email address"
        placeholder="user@gmail.com"
        type="email"
        labelClassName={"block font-medium leading-5 text-gray-700"}
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

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember_me"
            name="remember"
            type="checkbox"
            className="form-checkbox h-4 w-4 text-red-600 transition duration-150 ease-in-out"
          />
          <label
            htmlFor="remember_me"
            className="ml-2 block text-sm leading-5 text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm leading-5">
          <a
            href="#"
            className="font-medium text-red-600 hover:text-red-400 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div className="mt-6">
        <span className="block w-full rounded-md shadow-sm">
          <Button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
          >
            Sign in
          </Button>
        </span>
      </div>
    </form>
  );
}
