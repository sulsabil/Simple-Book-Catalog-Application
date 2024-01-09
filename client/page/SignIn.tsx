import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../redux/userSlice";
import { useAppDispatch } from "../app/hooks";


export default function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const [userData, setUserData] = useState({
    emailAddress: "",
    password: "",
    remember: false,
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.checked });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await dispatch(signIn(userData));

      if (signIn.fulfilled.match(response)) {
        navigate("/", { replace: true });
        alert("You are successfully signed in.");
        console.log()
      } else if (signIn.rejected.match(response)) {
        console.error("Error:", response.error.message);
        alert(`Sign-in failed: ${response.error.message}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
        Sign in to Bookend
      </h2>
    
      <div>
        <label
          htmlFor="email"
          className="block  text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="emailAddress"
          id="email"
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <div className="">
        <label
          htmlFor="password"
          className="block  text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <div className="flex items-center justify-between">
          <div className="flex items-start ">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                checked={userData.remember}
                onChange={handleCheckboxChange}
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="ms-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-500 dark:text-gray-400 "
              >
                Remember this device
              </label>
            </div>
          </div>
          <a
            href="#"
            className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login to your account
        </button>
        <div className="flex items-center justify-between text-sm font-medium text-gray-900 dark:text-white">
          Not registered yet?{" "}
          <a className="text-blue-600 hover:underline dark:text-blue-500">
            <Link to="/sign-up">Create account</Link>
          </a>
        </div>
      </div>
    </form>
  );
}
