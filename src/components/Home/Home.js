import React from "react";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import "../Home/Home.css";
import Footer from "./Footer/Footer";

export default function Home(props) {
  return (
    <div className="home-container" id="Home">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
