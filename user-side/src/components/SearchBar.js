import React, { useState } from "react";
import lensIcon from "../img/magnifying-glass-icon.png";
import element1 from "../img/element1.png";

const EMPTY_FORM = {
  inputAnimal: "",
};

function SearchBar(props) {
  const [newInput, setNewInput] = useState(EMPTY_FORM);

  const handleChange = (e) => {
    setNewInput(e.target.value);
    console.log("the handleChange is working");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      return;
    }

    props.searchAnimalCb(newInput);
    setNewInput(EMPTY_FORM);
    console.log("the button is pressed");
    e.target[0].value = "";
  };

  return (
    <div>
      <div className="mx-28 mt-2 flex flex-col gap-2 ">

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center gap-10"
        >
          <div className="flex bg-white gap-2 rounded-lg">
            <input
              onChange={(e) => handleChange(e)}
              className="rounded-lg w-72 h-7 px-3"
            />
            <img src={lensIcon} className="w-18 h-6 pt-0.5 text-center" />
          </div>

          <button className="bg-[#9fb7be] px-4 rounded-lg text-white font-bold py-1 text-lg pb-0.5 hover:bg-[#c57e13] hover:shadow-2xl hover:shadow-white/50">
            Vés-hi!
          </button>
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
