import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const headingPhrase = `${name} is a Web Developer from ${city}`;
  
  //console.log(headingPhrase);
  return (
  <div id='home'>
    <h1 style={{color: 'firebrick'}}>
      {headingPhrase}
    </h1>
  </div>
  )
}

export default Home;
