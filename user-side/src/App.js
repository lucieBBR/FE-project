import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Local from './helpers/Local';
import Api from './helpers/Api';

import PrivateRoute from './components/PrivateRoute';
import logo from "./img/logo.png";
import SearchBar from "./components/SearchBar";
import AnimalCards from "./views/AnimalCards";
import NotFound from "./views/NotFound";
import AnimalsList from "./views/AnimalsList";
import HomeView from "./views/HomeView";
import LoginView from './views/LoginView';
import AdminView from './views/AdminView';

function App() {
  const [animals, setAnimals] = useState([]);
  const [regions, setRegions] = useState([]);
  const [inputResult, setInputResult] = useState([]);
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    navigateTo();
    console.log(currentAnimal);
  }, [currentAnimal]);

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

  const navigateTo = () => {
    if (currentAnimal) {
      setInputResult(currentAnimal);
      navigate(`/animals/${currentAnimal.common_name}`);
    }
  };

  const gotToAnimalCard = (direction) => {
    if (currentAnimal.id === 1 && direction < 0) {
      setCurrentAnimal(animals[animals.length - 1]);
    } else if (currentAnimal.id === animals.length && direction > 0) {
      setCurrentAnimal(animals[0]);
    } else {
      setCurrentAnimal(animals[currentAnimal.id - 1 + direction]);
    }
  };

  const searchAnimal = async (animalName) => {
    let animal = null;
    let notFound = animalName;
    try {
      if (animalName) {
        let response = await fetch(`/animals?name=${animalName}`);
        if (response.ok) {
          animal = await response.json();
          setCurrentAnimal(animal[0]);
          if (animal.length !== 0) {
            setInputResult(animal[0]);
            navigate(`/animals/${animal[0].common_name}`);
          } else {
            console.log("animal not found");
            setInputResult(notFound);
            navigate("/NotFound");
          }
        } else {
          console.log("Server error: ", response.status, response.statusText);
        }
      }
    } catch (error) {
      console.log("Network error: ", error.message);
    }
  };

  //LOGIN
  async function doLogin(username, password) {
    let myresponse = await Api.loginUser(username, password);
    if (myresponse.ok) {
        Local.saveUserInfo(myresponse.data.token, myresponse.data.user);
        setUser(myresponse.data.user);
        setLoginErrorMsg('');
        navigate('/');
    } else {
        setLoginErrorMsg('Login failed');
    }
}

function doLogout() {
    Local.removeUserInfo();
    setUser(null);
}

  return (
    <div className="mb-20 relative">
      <div className="-mt-5">
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
        <Route path="/" element={<HomeView regions={regions}/>} />
        <Route path="/AnimalsList" element={<AnimalsList regions={regions} animalsFromApp={animals} />} />
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
            />
          }
        />
        <Route path="/admin/:userId" element={
             <PrivateRoute>
                <AdminView />
             </PrivateRoute>
            } />
        <Route path="/login" element={
              <LoginView 
                loginCb={(u, p) => doLogin(u, p)} 
                loginError={loginErrorMsg} 
              /> } />
      </Routes>
    </div>
  );
}

export default App;
