import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import animalCards from "../views/AnimalCards";
import AnimalsList from "../views/AnimalsList";

function RegionsGrid(props) {
  return (
    <div className="grid grid-cols-3 relative" id="regionsGrid">
      {props.homeRegions.map((r) => (
        <div key={r.id} className="px-8 flex flex-col items-center">
          <h1 className="text-white text-7xl text-center">{r.region_name}</h1>
          <p className="text-white font-semibold text-md text-justify py-10 px-4">
            {r.region_description}
          </p>
          <NavLink
            to="/AnimalsList"
            className={`bg-[#9fb7be] px-10 rounded-lg text-white font-bold py-1 text-lg pb-0.5 hover:bg-[#c57e13] hover:shadow-2xl hover:shadow-white/50 ${r.region_name}`}
          >
            Vés-hi!
          </NavLink>
        </div>
      ))}
    </div>
  );
}
export default RegionsGrid;
