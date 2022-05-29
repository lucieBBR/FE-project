import React, { useState } from "react";

function animalCards(props) {
  return (
    <div>
      <h1 className="text-white text-4xl">animalCards</h1>
      {/* {typeof props.inputResultFromApp !== "string" && ( */}
      <h1>{props.inputResultFromApp.common_name}</h1>
      {/* )} */}

      {/* ----> all the animals
      
      
      <ul>
        {props.animalsFromApp.map((a) => (
          <li key={a.id}> {a.common_name} </li>
        ))}
      </ul> */}
    </div>
  );
}
export default animalCards;
