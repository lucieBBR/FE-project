import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import logo from "../img/logo.png";
import arrow from "../img/arrow-icon1.png";


function NotFound(props) {
  return (
    <div className="ml-16">
      {/* {typeof props.inputResultFromApp === "string" && ( */}
      <div className=" flex relative justify-end mr-28">
      <img src={logo} className="h-[210px] absolute"></img>
      </div>
      <div className="container max-auto flex flex-col items-center mt-32">
        <h1 className="text-white text-6xl text-center mb-4">{props.inputResultFromApp}</h1>
        <h3 className="text-red-600 text-2xl font-bold text-center">Aquest animal no es troba a la nostra base de dades.</h3>
        <h4 className="text-white text-md font-bold text-center">Però, pots descobrir els que viuen aquí:</h4>
        <div className="flex gap-10 justify-center items-center mx-36 mt-10">
          {props.appRegions.map(r =>(<button className="text-white text-center text-7xl mb-4 hover:text-[#c57e13]" key={r.id}>{r.region_name}</button>))}
        </div>
        <h4 className="text-white text-md font-bold text-center mb-4">O realitzar una nova cerca:</h4>
        <SearchBar/>
      </div>
      <button className="flex gap-4 hover:-translate-x-6">
      <img src={arrow} className="h-10 mt-20 ml-16 bg-blend-color hover:animate-ping"/>
      <h1 className="text-white text-2xl mt-[84px] hover:text-[#c57e13]">Torna a l'inici</h1>
      </button>



      
    </div>
  );
}
export default NotFound;