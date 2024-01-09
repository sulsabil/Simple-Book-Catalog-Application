import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { createBookData } from "../redux/bookListSlice";
import { useAppDispatch } from "../app/hooks";
import { YourBookType } from "../types/bookType";

export default function CreateBook() {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<YourBookType>({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await dispatch(createBookData(formData));

      alert("Book created successfully");
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the book");
    }
  };

  return (
    <div className="p-3 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-center mt-4 normal-case">
        Create a new book
      </h1>
      <div className="flex flex-col gap-4 flex-1">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-1 mb-4 "
        >
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title:{" "}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />

          <label
            htmlFor="author"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Author:{" "}
          </label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={handleChange}
            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />

          <label
            htmlFor="genre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Genre:{" "}
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            onChange={handleChange}
            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          />

          <label
            htmlFor="publicationDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            publicationDate:{" "}
          </label>
          <input
            type="text"
            name="publicationDate"
            id="publicationDate"
            min="0"
            onChange={handleChange}
            className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          ></input>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
