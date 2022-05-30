import React, { useState } from "react";
import arrow from "../img/arrow-icon1.png";
import { NavLink } from "react-router-dom";


function NotFound(props) {
  return (
    <div className="ml-16">
      <div className=" flex relative justify-end mr-28">
      </div>
      <div className="container max-auto flex flex-col items-center mt-8">
        <h1 className="text-white text-6xl text-center mb-4">{props.inputResultFromApp}</h1>
        <h3 className="text-red-600 text-2xl font-bold text-center">Aquest animal no es troba a la nostra base de dades.</h3>
        <h4 className="text-white text-md font-bold text-center">Però, pots descobrir els que viuen aquí:</h4>
        <div className="flex gap-10 justify-center items-center mx-36 mt-10">
          {props.appRegions.map(r =>(<NavLink to="/AnimalsList"><button className="text-white text-center text-7xl mb-4 hover:text-[#c57e13]" key={r.id}>{r.region_name}</button></NavLink>))}
        </div>
      </div>
      <NavLink to="/" className="flex gap-4 hover:-translate-x-6 mb-10">
      <img src={arrow} className="h-10 mt-20 ml-16 bg-blend-color hover:animate-ping"/>
      <h1 className="text-white text-2xl mt-[84px] hover:text-[#c57e13]">Torna a l'inici</h1>
      </NavLink>





      
    </div>
  );
}
export default NotFound;