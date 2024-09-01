import React from "react";

import { Nav } from "./Nav";
import MusicPlayer from "./MusicPlayer";
import Cover from "./Cover";
import Plan from "./Plan";
import JoinUsForm from "./JoinUsForm";
import Price from "./Price";
import Contact from "./Contact";
import JoinUsCover from "./JoinUsCover";

const Home = () => {
  return (
    <div>
      <Nav />

      <MusicPlayer />
      
      <Cover />
      <Plan />
     
      <JoinUsCover/>
      <JoinUsForm/>
      

      <Contact />
      {/* <ContactTwo /> */}
    </div>
  );
};

export default Home;
