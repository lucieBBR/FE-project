import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import arrow from "../img/arrow-icon1.png";
import arrow2 from "../img/arrow-icon2.png";
import NotFound from "./NotFound";

function AnimalCards(props) {
  let { name } = useParams();
  let animal = props.animalsFromApp.find((a) => a.common_name === name);

  if (!animal) {
    return <NotFound />;
  }
// const changeImage = (id) => {

// animal = props.animalIndexFromApp.find((a)=> a.id === id)


// }
  return (
    <div>
      <div className="grid relative grid-cols-7 ml-8 mt-8">
        
          <div className="col-span-4">
            <div>
            <button onClick={(e) => props.gotToAnimalCardCb(-1)}>
            <img
              src={arrow}
              className="h-12 absolute z-10 mt-64 ml-28 bg-white/10 hover:bg-[#c57e13] rounded-full px-1.5 py-1.5 hover:animate-pulse"
            />
            </button>
            <button onClick={(e) => props.gotToAnimalCardCb(1)}>
             <img
              src={arrow2}
              className="h-12 absolute z-10 mt-64 ml-[630px] bg-white/10 hover:bg-[#c57e13] rounded-full px-1.5 py-1.5 hover:animate-pulse hover:cursor-pointer"
            />
            </button>
            </div>
            <img src={props.inputResultFromApp.image_src} className=" -z-10"/>
          
        </div>
        <div className="mr-20 col-span-3">
          <h1 className="text-white text-6xl text-center bg-[#2f430d75]">
            {props.inputResultFromApp.common_name}
          </h1>
          <h3 className="text-white text-xl italic font-bold text-center">
            {props.inputResultFromApp.species}
          </h3>
          <div className="flex flex-col gap-10 mt-10">
            <p className="text-white font-semibold">
              <span className="text-2xl bg-[#2F430D] font-normal">
                Situació:
              </span>
              {" " + props.inputResultFromApp.situation_state}
            </p>
            <p className="text-white font-semibold">
              <span className="text-2xl bg-[#2F430D] font-normal">
                Hàbitat:
              </span>
              {" " + props.inputResultFromApp.habitat}
            </p>
            <p className="text-white font-semibold">
              <span className="text-2xl bg-[#2F430D] font-normal">
                Animals relacionats:
              </span>
              {" " + props.inputResultFromApp.fk_related_animals}
            </p>
            <p className="text-white font-semibold">
              <span className="text-2xl bg-[#2F430D] font-normal">
                També el pots trobar a:
              </span>
              
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <h3 className="font-bold text-xl text-[#2F430D] bg-[#c57e13] w-[188px]">
              Vols saber-ne més?
            </h3>
            <button className="bg-[#2F430D] px-10 rounded-lg text-white font-bold py-1 text-lg pb-0.5 hover:bg-[#c57e13] hover:shadow-2xl hover:shadow-white/50">
              Vés-hi!
            </button>
          </div>
        </div>
      </div>

      <NavLink to="/" className="flex ml-16 gap-4 hover:-translate-x-6 mb-10">
        <img
          src={arrow}
          className="h-10 mt-20 ml-16 bg-blend-color hover:animate-ping"
        />
        <h1 className="text-white text-2xl mt-[84px] hover:text-[#c57e13]">
          Torna a l'inici
        </h1>
      </NavLink>

      {/* ----> all the animals
      
      
      <ul>
        {props.animalsFromApp.map((a) => (
          <li key={a.id}> {a.common_name} </li>
        ))}
      </ul> */}
    </div>
  );
}
export default AnimalCards;
