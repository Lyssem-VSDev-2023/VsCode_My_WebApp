import "./index.css";
import React, { useEffect, useState } from "react";
import RecipeTitle from "./RecipeTitle";
import IngredientList from "./IngredientList";
import IngredientSteps from "./IngredientSteps";

function App() {
  // TODO: Add recipe object
  const initialRecipe = {
    title: "Mashed potatoes",
    feedback: {
      rating: 2.8,
      reviews: 20,
    },
    ingredients: [
      { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
      { name: "4 Tbsp butter", prepared: false },
      { name: "1/8 cup heavy cream", prepared: false },
      { name: "Salt", prepared: true },
      { name: "Pepper", prepared: true },
    ],
  };

  const [recipe, setRecipe] = useState(initialRecipe);

  function ingredientClick(index) {
    const updatedRecipe = { ...recipe };
    updatedRecipe.ingredients[index].prepared =
      !updatedRecipe.ingredients[index].prepared;
    setRecipe(updatedRecipe);
  }

  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    setPrepared(recipe.ingredients.every((i) => i.prepared));
  }, [recipe]);

  const mySteps = {
    steps: [
      { step: "Add cut potatoes to a pot of heavily salted water." },
      { step: "Bring pot to a boil." },
      { step: "Boil the potatoes until fork tender, about 15-20 minutes." },
      { step: "Strain the potatoes." },
      { step: "Return potatoes to pot." },
      { step: "Add butter, cream, salt, and pepper to taste." },
      { step: "Mash potatoes." },
      { step: "Reseason and add butter and cream as desired." },
    ],
  };

  const steps = {};

  return (
    <article>
      <h1>Recipe Manager</h1>
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />{" "}
      {/* TODO: Add IngredientList component */}
      <IngredientList
        ingredients={recipe.ingredients}
        onClick={ingredientClick}
      />
      <IngredientSteps steps={mySteps.steps} />
      {prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping</h2>}
    </article>
  );
}

export default App;
