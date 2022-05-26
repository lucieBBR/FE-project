import React, { useEffect, useState } from "react";
import bgImage from "./img/bg-image.png";
import logo from "./img/logo2.png"
import SearchBar from "./components/SearchBar";


// import "./App.css";

function App() {
  let [animals, setAnimals] = useState([]);
  let [regions, setRegions] = useState([]);
  useEffect(() => {
    getAnimals();
    getRegions();
  }, []);

  const getAnimals = () => {
    fetch("/animals")
      .then((res) => res.json())
      .then((json) => {
        setAnimals(json);

        console.log(json);
      })
      .catch((error) => {
        console.log("Network error: ", error.message);
      });
  };
  const getRegions = () => {
    fetch("/regions")
      .then((res) => res.json())
      .then((json) => {
        setRegions(json);

        console.log(json);
      })
      .catch((error) => {
        console.log("Network error: ", error.message);
      });
  };
  return (
    <div className="h-screen relative w-screen">
      <img src={bgImage} className="-z-50 absolute h-full w-full object-cover"></img>
      <div className="flex justify-between content-center mr-32">
      <SearchBar className="z-10"/>
      <img src={logo} className="h-[210px]"></img>

      </div>
      <h1 className="text-3xl text-red-500 font-bold underline z-10 mx-20">
        Animals world!
      </h1>


      {/* <ul>
      {animals.map(a =>(
        <li key={a.id}> {a.common_name} </li>
      ))
      }
    </ul>
    <ul>
      {regions.map(r =>(
        <li key={r.id}> {r.region_name} </li>
      ))
      }
    </ul> */}
    </div>
  );
}

export default App;
