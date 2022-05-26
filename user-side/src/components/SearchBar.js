import React, { useState } from "react";
import lensIcon from "../img/magnifying-glass-icon.png";
import element1 from "../img/element1.png";

function SearchBar(props) {
  return (
    <div>
      <div className="mx-20 pt-20 flex flex-col gap-2 ">
      <image src={element1} className="w-10"></image>
      <h1 className="ml-4 font-bold text-xl text-[#2F430D] z-10 bg-[#c57e13] w-40">Busca un animal:</h1>
      <form className="relative">
        <input className="rounded-lg w-72 absolute -z-10"></input>
        <img src={lensIcon} className="z-10 w-[20px] pt-[2px] ml-[260px]"></img>
      </form>

      </div>
      
    </div>
  );
}
export default SearchBar;
