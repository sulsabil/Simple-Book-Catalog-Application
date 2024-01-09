import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks.ts";
import { fetchBookData } from "../redux/bookListSlice.ts";
import { YourBookType } from "../types/bookType.ts";
import Search from "../src/components/search.tsx";
import React from "react";
import BookDetails from "./BookDetail.tsx";
import { Link } from "react-router-dom";

export default function AllBookList() {
  const dispatch = useAppDispatch();
  const [Allbooks, setAllBooks] = useState<YourBookType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchBookData("/api/v1/books"));
        const data = response.payload;

        setAllBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
    
      }
    };

    fetchData();
  }, [dispatch]);

  if (!Allbooks) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col mt-4 mb-4">
      <div className="mb-4">
        <Search />
      </div>

      <div className="flex items-center justify-center flex-wrap gap-2">
      {Array.isArray(Allbooks) &&
  Allbooks.map((book) => (
    <div key={book._id}>
      
      <Link to={`/details/${book._id}`}>
        <BookDetails books={book} key={book._id} />
      </Link>
    </div>
  ))}
      </div>
    </div>
  );
}