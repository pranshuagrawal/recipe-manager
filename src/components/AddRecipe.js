import { db, auth } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

import { useState } from "react";
const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipeURL, setRecipeURL] = useState("");
  const [isFavourite, setIsFavourite] = useState(false);

  const recipeCollectionsRef = collection(db, "recipes");

  const addRecipe = async () => {
    try {
      await addDoc(recipeCollectionsRef, {
        name: recipeName,
        url: recipeURL,
        favourite: isFavourite,
        userId: auth?.currentUser?.uid,
      });
    } catch (e) {
      console.error("Error while adding recipe", e);
    }
  };

  return (
    <div>
      <input
        placeholder="Recipe Name"
        value={recipeName}
        onInput={(e) => setRecipeName(e.target.value)}
      />
      <input
        placeholder="Recipe URL"
        value={recipeURL}
        onInput={(e) => setRecipeURL(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isFavourite}
        onChange={(e) => setIsFavourite(e.target.checked)}
      />
      <label>Is Favourite</label>

      <button onClick={addRecipe}>Add Recipe</button>
    </div>
  );
};

export default AddRecipe;
