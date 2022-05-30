import React, { useState } from "react";
import arrow from "../img/arrow-icon1.png";
import { NavLink } from "react-router-dom";

function AnimalsList(props) {
  return (
    <div>
      <h1>AnimalsList</h1>
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
