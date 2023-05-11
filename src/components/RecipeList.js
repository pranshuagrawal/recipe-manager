import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
const RecipeList = () => {
  const [recipeList, setRecipeList] = useState([]);

  const recipeCollectionsRef = collection(db, "recipes");
  const getRecipeList = async () => {
    try {
      const data = await getDocs(recipeCollectionsRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRecipeList(filteredData);
    } catch (e) {
      console.error("Error fetching recipe list", e);
    }
  };

  const deleteRecipe = async (id) => {
    const recipeDoc = doc(db, "recipes", id);
    await deleteDoc(recipeDoc);
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  return (
    <>
      <div>Recipe List</div>
      <div>
        {recipeList.map((recipe) => (
          <>
            <p>
              <strong>Name: </strong>
              {recipe.name}
            </p>
            <p>
              <strong>URL: </strong>
              {recipe.url}
            </p>
            <p>
              <strong>Is Favourite: </strong>
              {recipe.favourite ? "Yay" : "Na"}
            </p>
            <p>
              <button onClick={() => deleteRecipe(recipe.id)}>
                Delete Recipe
              </button>
            </p>
          </>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
