import React, { useState } from "react";
import SearchBar from "../components/SearchBar";


function NotFound(props) {
  return (
    <div>
      {/* {typeof props.inputResultFromApp === "string" && ( */}
      <div className="container max-auto flex flex-col items-center my-28">
        <h1 className="text-white text-6xl text-center mb-4">{props.inputResultFromApp}</h1>
        <h3 className="text-red-600 text-3xl font-bold text-center">Aquest animal no es troba a la nostra base de dades.</h3>
        <h4 className="text-white text-lg font-bold text-center">Però, pots descobrir els que viuen aquí:</h4>
        <div className="flex gap-10 justify-center items-center mx-36 mt-10">
          {props.appRegions.map(r =>(<button className="text-white text-center text-7xl mb-4 hover:text-[#c57e13]" key={r.id}>{r.region_name}</button>))}
        </div>
        <h4 className="text-white text-lg font-bold text-center mb-4">O realitzar una nova cerca:</h4>
        <SearchBar/>
      </div>




      
    </div>
  );
}
export default NotFound;