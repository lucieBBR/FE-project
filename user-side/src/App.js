import React, { useEffect, useState } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  let [animals, setAnimals] = useState([]);
  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = () => {
    fetch("/animals")
      .then(res => res.json())
      .then(json => {
        setAnimals(json);

        console.log(json);
      })
      .catch(error => {
        console.log("Network error: ", error.message);
      });
  };
  return (
    <div className="App">
        <h1 className="text-3xl text-red-500 font-bold underline">
      Animals world!
    </h1>
    <ul>
      {animals.map(a =>(
        <li key={a.id}> {a.Common_name} </li>
      ))
      }
    </ul>
      
    </div>
  );
}

export default App;
