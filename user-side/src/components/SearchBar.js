import React, { useState } from "react";
import lensIcon from "../img/magnifying-glass-icon.png";
import element1 from "../img/element1.png";
import logo from "../img/logo.png"

function SearchBar(props) {
  return (
    <div>
      <div className="mx-20 pt-20 flex flex-col gap-2 ">
      {/* <image src={element1} className="w-10"></image> ---->not working*/}
      <h3 className="ml-4 font-bold text-xl text-[#2F430D] z-10 bg-[#c57e13] w-[166px]">Busca un animal:</h3>
      <form className="flex items-center gap-10">
        <div className="flex bg-white gap-2 rounded-lg">
        <input className="rounded-lg w-72 h-7 px-3"></input>
        <img src={lensIcon} className="z-10 w-18 h-6 pt-0.5 text-center"></img>
        </div>

        <button className="bg-[#9fb7be] px-4 rounded-lg text-white font-bold py-1 text-lg pb-0.5">Vés-hi!</button>
      </form>

      </div>
      
    </div>
  );
}
export default SearchBar;
