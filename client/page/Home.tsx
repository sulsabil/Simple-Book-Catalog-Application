import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { MdHomeRepairService } from "react-icons/md";
import "../src/index.css";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { YourBookType } from "../types/bookType";
import Items from "../src/components/Items";

export default function Home() {
  const [ratings, setRatings] = useState([2, 3, 4, 5, 6]);
  const [totalRatings, setTotalRatings] = useState<number>(
    ratings.reduce((acc, rating, index) => acc + rating * (index + 1), 0) /
      ratings.length || 0
  );

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("/genres.json");
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleStarClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const newRatings = [...ratings];
    newRatings[index] += 1;
    setTotalRatings(
      newRatings.reduce((acc, rating, idx) => acc + rating * (idx + 1), 0) /
        ratings.length
    );
  };

  const [books, setBooks] = useState<YourBookType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        setError(
          (error ||
            "An error occurred while fetching data.") as React.SetStateAction<
            string | null
          >
        );
      } finally {
        setLoading(false);
      }
    };

    const fetchAllData = async () => {
      await fetchData("/api/v1/books");
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className=" relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5  p-1  text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Register now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-10 p-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-2xl lg:text-6xl">
          Deciding what to read next?{" "}
          <span className="text-slate-500">You’re in the right place </span>
        </h1>
        <div className="text-gray-400  ">
          Tell us what titles or genres you’ve enjoyed in the past, and we’ll
          give you surprisingly insightful recommendations. What are your
          friends reading? Chances are your friends are discussing their
          favorite (and least favorite) books on Goodreads. Good reads is that
          site. It is a place where you can see what your friends are reading
          and vice versa...
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-4 my-4">
          {books && books.length > 0 && (
            <div className="">
              <div className="my-3">
                <h2 className="text-slate-700 font-bold text-2xl lg:text-6xl">
                  Search and browse books
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {books.map((books) => (
                  <Items books={books} key={books._id} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 mb-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Title / Author / ISBN"
              value={searchTerm}
              onChange={handleSearch}
            />
            <h2>Search and browse books</h2>
            <div className="genres-grid ">
              {genres.map((genre, index) => (
                <div key={index} className="genre-item bg-sky-400/100 ">
                  {genre}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 md:flex md:flex-row gap-4 my-10 gap-2 bg-white-900 mt-7 normal-case">
          <div className="w-full flex-1 items-center justify-center">
            <p className="text-slate-700 font-bold text-2xl lg:text-6xl">
              Ratings From Our User In Bangladesh
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {totalRatings.toFixed(2)} out of 5
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {ratings.length} global ratings
            </p>
            {ratings.map((rating, index) => (
              <div className="flex items-center mt-4" key={index}>
                <a
                  href="#"
                  className="items-center text-center flex flex-row text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={(event) => handleStarClick(event, index)}
                >
                  {index + 1}
                  <svg
                    className="w-4 h-4 text-yellow-300 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </a>
                <div className="w-full h-5 mx-4 bg-gray-400 rounded dark:bg-gray-700">
                  <div
                    className="h-5 bg-gray-300 rounded"
                    style={{
                      width: `${(rating / totalRatings) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-400">
                  {totalRatings > 0
                    ? `${((rating / totalRatings) * 100).toFixed(2)}%`
                    : "0.00%"}
                </span>
              </div>
            ))}
          </div>
          <div className="flex md:space-x-10 space-x-4 flex-1 justify-center">
            <div className="mt-10 space-y-4">
              <div className="w-48 flex flex-col items-center bg-white text-center drop-shadow-2xl p-5 rounded-md">
                <MdHomeRepairService size={"1.8rem"} />
                <h1 className="text-xl font-bold">Good Services</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  harum eius quaerat?
                </p>
              </div>
              <div className="w-48 flex flex-col items-center bg-white text-center drop-shadow-2xl p-5 rounded-md">
                <MdHomeRepairService size={"1.8rem"} />
                <h1 className="text-xl font-bold">Buy Dream Your House</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  harum eius quaerat?
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-48 flex flex-col items-center bg-white text-center drop-shadow-2xl p-5 rounded-md">
                <MdHomeRepairService size={"1.8rem"} />
                <h1 className="text-xl font-bold">Sell Your House Easily</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  harum eius quaerat?
                </p>
              </div>
              <div className="w-48 flex flex-col items-center bg-white text-center drop-shadow-2xl p-5 rounded-md">
                <MdHomeRepairService size={"1.8rem"} />
                <h1 className="text-xl font-bold">Good Services</h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  harum eius quaerat?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
