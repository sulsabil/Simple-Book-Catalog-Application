import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { YourBookType } from "../types/bookType";

export default function MyBook() {
  const { currentUser, loading, error } = useSelector(
    (state: RootState) => state.auth
  );
  console.log(currentUser)
  const [userBooks, setUserBooks] = useState<YourBookType[]>([]);
  console.log(userBooks)
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const handleShowBook = async () => {
      try {
        const res = await fetch(`/api/v1/books/${currentUser?._id}`);
        const data = await res.json();
        if (data.success === false) {
          setFetchError(data.error || "Failed to fetch books");
          return;
        }

        setUserBooks(data.books || []);
      } catch (error) {
        setFetchError("An error occurred while fetching books");
      }
    };

    handleShowBook();
  }, [currentUser]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (fetchError) return <div>{fetchError}</div>;

  return (
    <div className='p-3 max-w-lg mx-auto mt-4 mb-4 '>
      <h1  className='text-2xl font-semibold text-center my-7 mb-4'>My Book</h1>
      {userBooks && userBooks.length > 0 && (
        <div className="flex flex-warp gap-4 ">
          {userBooks.map((book) => (
            <div
              key={book._id}
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {book.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {book.author}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {book.genre}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {book.publicationDate}
              </p>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  EDIT
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                >
                  DELETE
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
