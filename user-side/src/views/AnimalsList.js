import React, { useState } from "react";
import arrow from "../img/arrow-icon1.png";
import { NavLink } from "react-router-dom";


// the information that is showing this page is not the good one. I leave it like that for you to see how it should looks like, but you have to replace it for the information that is in the junction table. But first of all you need create the code for the backend part.

function AnimalsList(props) {
  return (
    <div className="mt-8">
      <h1 className="text-white text-7xl text-center">{ props.regions[0].region_name }</h1>
      <ul className="text-center mt-10 text-white font-bold text-2xl">
        {props.animalsFromApp.map((a) => (
          <NavLink to={`/animals/${a.common_name}`}><li key={a.id} className="hover:text-[#c57e13] cursor-pointer"> {a.common_name} </li></NavLink>
        ))}
      </ul> 
      <NavLink to="/" className="flex gap-4 hover:-translate-x-6 mb-10">
        <img
          src={arrow}
          className="h-10 mt-20 ml-16 bg-blend-color hover:animate-ping"
        />
        <h1 className="text-white text-2xl mt-[84px] hover:text-[#c57e13]">
          Torna a l'inici
        </h1>
      </NavLink>
    </div>
  );
}
export default AnimalsList;
