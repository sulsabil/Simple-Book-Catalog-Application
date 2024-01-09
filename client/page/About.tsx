import React from "react";
import { MdHomeRepairService } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import "../src/index.css";

export default function About() {
  return (
    <div className="p-20 px-4 max-w-6xl mx-auto normal-case text-justify ">
      <h1 className="text-2xl font-bold mb-2 text-slate-800">
        Know{" "}
        <span className="text-2xl font-bold mb-2 text-slate-800">About us</span>{" "}
      </h1>
      <p className="mb-4 text-slate-700 text-wrap">
        Welcome to our book website! We are passionate about literature and aim
        to provide a platform where book enthusiasts can discover, explore, and
        discuss their favorite reads.You can find your next favorite book. And
        on this journey with your friends, you can explore new territory, gather
        information, and expand your mind. Knowledge is power, and power is best
        shared among readers.
      </p>
      <p className="mb-4 text-slate-700 text-wrap">
        Our mission is to foster a community of readers, connect authors with
        their audience, and make the world of books more accessible to
        everyone.You can find your next favorite book. And on this journey with
        your friends, you can explore new territory, gather information, and
        expand your mind. Knowledge is power, and power is best shared among
        readers.
      </p>

      <h2 className="text-2xl font-bold mb-2 text-slate-800">What We Offer</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Curated book recommendations</li>
        <li>Author interviews and insights</li>
        <li>Book reviews and discussions</li>
        <li>Easy book discovery and search</li>
      </ul>

      <div className="w-11/12 mt-4 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10 ">
        <div className="flex md:space-x-10 space-x-4">
          <div className="mt-10 space-y-4 ">
            <div className="w-48 flex flex-col items-center bg-white text-center drop-shadow-2xl p-5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              <MdHomeRepairService size={"1.8rem"} />
              <h1 className="text-xl font-bold text-slate-800">
                Good Services
              </h1>
              <p className="text-xs text-gray-700 inline-block align-middle ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                harum eius quaerat?
              </p>
            </div>
            <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              <MdHomeRepairService size={"1.8rem"} />
              <h1 className="text-xl font-bold text-slate-800">
                Buy Dream BOOKS
              </h1>
              <p className="text-xs text-gray-700 inline-block align-middle ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                harum eius quaerat?
              </p>
            </div>
          </div>
          <div className=" relative flex flex-col ">
            <img
              src="https://www.arch2o.com/wp-content/uploads/2018/09/Arch2O-15-of-the-most-unbelievably-beautiful-bookstore-in-the-world-20.jpg"
              alt="Banner Image"
              className="w-full h-35 bg-cover bg-center object-cover shadow-md hidden md:block"
            />
            <div className="bg-black opacity-50 w-full h-48"></div>
            <div className="text-center text-black-900 hidden md:block mt-4">
              <p className="text-2xl font-bold inline-block align-middle ">Welcome to Our Book Website</p>
              <p className="text-sm text-gray-700 text-wrap">
                Good reads is that site. It is a place where you can see what
                your friends are reading and vice versa. You can create
                "bookshelves" to organize what you've read (or want to read).
                You can comment on each other's reviews. You can find your next
                favorite book. And on this journey with your friends, you can
                explore new territory, gather information, and expand your mind.
                Knowledge is power, and power is best shared among readers.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              <MdHomeRepairService size={"1.8rem"} />
              <h1 className="text-xl font-bold text-slate-800">
                BUY Your BOOK Easily
              </h1>
              <p className="text-xs text-gray-700 inline-block align-middle  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                harum eius quaerat?
              </p>
            </div>
            <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              <MdHomeRepairService size={"1.8rem"} />
              <h1 className="text-xl font-bold text-slate-800">
                Good Services
              </h1>
              <p className="text-xs text-gray-700 inline-block align-middle ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                harum eius quaerat?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
        <div className="download w-full  py-16 rounded-xl">
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              Download OUR App
            </h1>
            <div className="flex space-x-5 ">
              <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
                <FaGooglePlay size={"1.5rem"} />
                <div>
                  <p className="text-xs text-slate-800">Get ON</p>
                  <h1 className="text-sm text-slate-800">Google Play</h1>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-5 py-2 bg-white rounded drop-shadow-xl">
                <IoLogoAppleAppstore size={"1.5rem"} />
                <div>
                  <p className="text-xs text-slate-800 ">Get ON</p>
                  <h1 className="text-sm text-slate-800">App Store</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
