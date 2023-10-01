import React, { useState } from "react";

function RecipeCreate({ addRecipe }) { // Changed createRecipe to addRecipe to match App component
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };

    addRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="name">Name:</label></td>
            <td><input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor="cuisine">Cuisine:</label></td>
            <td><input type="text" id="cuisine" name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor="photo">Photo:</label></td>
            <td><input type="text" id="photo" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} /></td>
          </tr>
          <tr>
            <td><label htmlFor="ingredients">Ingredients:</label></td>
            <td><textarea id="ingredients" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea></td>
          </tr>
          <tr>
            <td><label htmlFor="preparation">Preparation:</label></td>
            <td><textarea id="preparation" name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)}></textarea></td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}


export default RecipeCreate;
