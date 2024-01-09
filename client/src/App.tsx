import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import AllBookList from "../page/AllBookList";
import Contact from "../page/Contact";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";
import React from "react";
import Profile from "../page/Profile";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import CreateBook from "../page/CreateBook";
import MyBook from "../page/MyBook";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bookList" element={<AllBookList />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/createYourBook" element={<CreateBook />} />
          <Route path="/myBooks" element={<MyBook />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
