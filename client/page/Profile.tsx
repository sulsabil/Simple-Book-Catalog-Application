import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-3 max-w-lg mx-auto mt-4 flex flex-col gap-4 mb-4">
      <h1 className="text-2xl font-semibold text-center my-7">
        Edit Your Profile
      </h1>
      <div>
        <form action="" className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="emailAddress"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
            />
          </div>
          <button
            // disabled={loading}
            className="bg-sky-400/100 text-white rounded-lg px-3 py-3 uppercase hover:opacity-95 disabled:opacity-80"
          >
            Update
            {/* {loading ? "Loading..." : "Update"} */}
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        <Link to="/createYourBook">
          <button
            className="bg-sky-400/100 text-white rounded-lg px-3 py-3 uppercase hover:opacity-95 disabled:opacity-80"
          >
            Create your Book
          </button>
        </Link>
      </div>
    </div>
  );
}
