import React from "react";

import Cover from "./Cover";

import Contact from "./Contact";

import Video from "./Video";
import ShopCart from "../route/ShopCart";
import Benefits from "./Benefits";
import Footer from "../route/Footer";
import ProductHighlight from "./ProductHighlight";
import Tips from "./Tips";

const Home = () => {
  return (
    <div>
      <Cover />
      <Video />
      <Benefits/>
      <ProductHighlight/>
      <ShopCart />
      {/* <Contact /> */}
      {/* <Tips/> */}
      <Footer/>
    </div>
  );
};

export default Home;
