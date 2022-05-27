import React, { useState } from "react";
import lensIcon from "../img/magnifying-glass-icon.png";
import element1 from "../img/element1.png";

const EMPTY_FORM = {
  inputAnimal: "",
};

function SearchBar(props) {
  const [newInput, setNewInput] = useState(EMPTY_FORM);

  const handleChange = e => {
    props.setInput(e.target.value);
    console.log("the handleChange in working")
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.searchAnimalCb(newInput);
    setNewInput(EMPTY_FORM);
    console.log("the button is pressed")
  };



  return (
    <div>
      <div className="mx-28 pt-20 flex flex-col gap-2 ">
      {/* <image src={element1} className="w-10"></image> ---->not working*/}
      <h3 className="ml-4 font-bold text-xl text-[#2F430D] bg-[#c57e13] w-[166px]">Busca un animal:</h3>
      <form onSubmit={e => handleSubmit(e)} className="flex items-center gap-10">
        <div className="flex bg-white gap-2 rounded-lg">
        <input onChange={e => handleChange(e)} className="rounded-lg w-72 h-7 px-3"/>
        <img src={lensIcon} className="w-18 h-6 pt-0.5 text-center"/>
        </div>

        <button className="bg-[#9fb7be] px-4 rounded-lg text-white font-bold py-1 text-lg pb-0.5 hover:bg-[#c57e13] hover:shadow-2xl hover:shadow-white/50">Vés-hi!</button>
      </form>

      </div>
      
    </div>
  );
}
export default SearchBar;
