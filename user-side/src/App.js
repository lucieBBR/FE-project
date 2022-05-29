import React, { useEffect, useState } from "react";
// import { Route, Routes} from "react-router-dom"
import gridLines from "./img/grid-lines2.png";
import logo from "./img/logo.png";
import SearchBar from "./components/SearchBar";
import RegionsGrid from "./components/RegionsGrid";
import AnimalCards from "./views/AnimalCards";
import NotFound from "./views/NotFound";

function App() {
  let [animals, setAnimals] = useState([]);
  let [regions, setRegions] = useState([]);
  let [inputResult, setInputResult] = useState([]);
  let [input, setInput] = useState("");

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

  // show animal() --->

  const searchAnimal = async (animalName) => {
    let animal = null;
    let notFound = animalName;
    try {
      if (animalName) {
        let response = await fetch(`/animals?name=${animalName}`);
        if (response.ok) {
          animal = await response.json();
        } else {
          console.log("Server error: ", response.status, response.statusText);
        }
      }
      //show animal()
    } catch (error) {
      console.log("Network error: ", error.message);
    }
    if (animal.length !== 0) {
      console.log(animal[0]);
      setInputResult(animal[0]);
    } else {
      console.log("animal not found");
      setInputResult(notFound);
    }
  };

  return (
    <div className="mb-20 relative">

{
  inputResult.length === 0 &&  <div><img src={gridLines} className="absolute mt-32 w-screen h-[800px]"></img> 
      {/* search bar and logo  */}
        <div className="flex justify-between content-center mr-28">
        <div className="flex flex-col">
        <h3 className="ml-32 font-bold text-xl text-[#2F430D] bg-[#c57e13] w-[166px] mt-20">Busca un animal:</h3>
        <SearchBar searchAnimalCb={searchAnimal} />
        </div>
        <img src={logo} className="h-[210px]"></img>
        </div>
      </div>
    
}


      {inputResult.length !== 0 ?
        (typeof inputResult !== "string" ? (
          <AnimalCards
            inputResultFromApp={inputResult}
            animalsFromApp={animals}
          />
        ) : (
          <NotFound inputResultFromApp={inputResult} appRegions={regions} searchAnimalCb={searchAnimal} />
        )) :      /* grid*/
        <div className="mx-10">
          <h3 className="ml-16 font-bold text-3xl text-[#2F430D] bg-[#c57e13] w-[470px] mb-12">
            O descobreix els que viuen aquí:
          </h3>
          <RegionsGrid appRegions={regions} />
        </div> }
    

    </div>
  );
}

export default App;
