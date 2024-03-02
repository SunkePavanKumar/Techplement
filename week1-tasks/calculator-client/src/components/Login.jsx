import { User, Lock, LogIn, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          CalcApp
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Make your calculations easier
        </p>

        <div className="mb-8 text-center">
          <Calculator className="mx-auto h-24 w-24 text-blue-500" />
        </div>

        <form>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <User className="ml-3" />
              <input
                type="text"
                id="username"
                className="p-3 pl-0 bg-transparent w-full focus:outline-none"
                placeholder="Your username"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <Lock className="ml-3" />
              <input
                type="password"
                id="password"
                className="p-3 pl-0 bg-transparent w-full focus:outline-none"
                placeholder="Your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              <LogIn className="mr-2" />
              Log in
            </button>
            <Link
              to={"/signup"}
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
