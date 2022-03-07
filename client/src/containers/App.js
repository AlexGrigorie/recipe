import React, { useState, useEffect } from "react";
import "./App.css";
import AddRecipe from "../components/AddRecipe/AddRecipe";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import Navigation from "../components/Navigation/Navigation";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [route, setRoute] = useState("signin");
  const [searchfield, setSearchfield] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((recipe) => {
        setRecipe(recipe);
      });
  }, []);

  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filterRecipe = recipe.filter((recipe) => {
    return recipe.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
  });
  return (
    <>
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === "home" ? (
        <>
          <div className="tc">
            <h1 className="f1">Rețete</h1>
            <SearchBox searchChange={onSearchChange} />
            <CardList recipes={filterRecipe} />
          </div>
        </>
      ) : route === "signin" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : route === "addrecipe" ? (
        <AddRecipe />
      ) : (
        <Register />
      )}
    </>
  );
}

export default App;
