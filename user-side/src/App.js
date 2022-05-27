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
    let animal = animals.find((a) => a.common_name || a.species === animalName);
    try {
      if (animal) {
        let response = await fetch(`/animals`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputAnimal: input }),
        });
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

    console.log(animal);
  };

  return (
    <div className="mb-20 relative">
      <img src={gridLines} className="absolute mt-32 w-screen h-[800px]"></img>
      {/* <img
        src={bgImage} id="bgImage"
        className="-z-50 absolute"
      ></img> */}

      {/* search bar and logo */}
      <div className="flex justify-between content-center mr-28">
        <SearchBar searchAnimalCb={searchAnimal}/>
        <img src={logo} className="h-[210px]"></img>
      </div>

      {/* grid*/}
      <div className="mx-10">
        <h3 className="ml-16 font-bold text-3xl text-[#2F430D] bg-[#c57e13] w-[470px] mb-12">
          O descobreix els que viuen aquí:
        </h3>
        <RegionsGrid appRegions={regions} />
      </div>

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
    <AnimalCards/>
    <NotFound/>

    </div>
  );
}

export default App;
