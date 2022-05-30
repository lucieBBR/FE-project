import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import gridLines from "./img/grid-lines2.png";
import logo from "./img/logo.png";
import SearchBar from "./components/SearchBar";
// import RegionsGrid from "./components/RegionsGrid";
import AnimalCards from "./views/AnimalCards";
import NotFound from "./views/NotFound";
import AnimalsList from "./views/AnimalsList";
import HomeView from "./views/HomeView";

function App() {
  const [animals, setAnimals] = useState([]);
  const [animalIndex, setAnimalIndex] = useState(0);
  const [regions, setRegions] = useState([]);
  const [inputResult, setInputResult] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

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

  const gotToAnimalCard = (direction) => {
    let currentAnimal = animals.find((a) => a.common_name);
    

  

    if (direction === -1) {

      currentAnimal.id = currentAnimal.id - 1;
      setAnimalIndex(currentAnimal.id);

      // if (animalIndex === 0) {
      //   currentAnimal.id = animals.length-1
      //   console.log(currentAnimal.id);
      // }

    }

    if (direction === 1) {
      currentAnimal.id = currentAnimal.id + 1;
      setAnimalIndex(currentAnimal.id);
    }
    console.log(currentAnimal.id)
    navigate(`/animals/common_name`);


    // console.log(currentAnimal)
    // base on direction find the next index
    // if the index is 0, go to the length-1
    // update the index
    // navegate /animal/common_name
  };

  // goToAnimal(+1 or -1) if the button is the next or the previous in the animal card. and animals.length-1// animalIndex = 1 (search inside the animal [] for this animal)

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
      navigate(`/animals/${animal[0].common_name}`);
    } else {
      console.log("animal not found");
      setInputResult(notFound);
      navigate("/NotFound");
    }
  };

  return (
    <div className="mb-20 relative">
      <div>
        {/* search bar and logo  */}
        <div className="flex justify-between content-center mr-28">
          <div className="flex flex-col">
            <h3 className="ml-32 font-bold text-xl text-[#2F430D] bg-[#c57e13] w-[166px] mt-16">
              Busca un animal:
            </h3>
            <SearchBar searchAnimalCb={searchAnimal} />
          </div>
          <img src={logo} className="h-[200px]"></img>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/AnimalsList" element={<AnimalsList />} />
        <Route
          path="/NotFound"
          element={
            <NotFound
              inputResultFromApp={inputResult}
              appRegions={regions}
              searchAnimalCb={searchAnimal}
            />
          }
        />
        <Route
          path="/Animals/:name"
          element={
            <AnimalCards
              inputResultFromApp={inputResult}
              animalsFromApp={animals}
              gotToAnimalCardCb={gotToAnimalCard}
              animalIndexFromApp={animalIndex}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
