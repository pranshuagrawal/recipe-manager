import React from "react";
import logo from "./logo.svg";
import "./App.css";

import AuthInterface from "./components/AuthInterface";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <div className="App">
      <AuthInterface />
      <br />

      <hr />
      <br />
      <AddRecipe />
      <br />

      <hr />

      <RecipeList />
    </div>
  );
}

export default App;
