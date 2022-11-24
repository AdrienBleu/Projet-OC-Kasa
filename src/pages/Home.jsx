import React from "react";

import marketdata from "../__mocks__/aboutData";
import Mainbanner from "../components/Mainbanner";
import image from "../assets/img/banner.png";
import Realestate from "../components/realestate";

const slogan = marketdata.slogan;

const Home = () => {
  return (
    <main className="main">
      <Mainbanner image={image} title={slogan} />
      <Realestate />
    </main>
  );
};

export default Home;