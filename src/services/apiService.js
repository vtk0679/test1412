import axios from "axios";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

export const apiGetRecipe = async () => {
  try {
    const resp = await axios.get("/random.php").then((response) => response);
    const { idMeal, strMeal, strInstructions, strMealThumb } =
      resp.data.meals[0];

    return {
      id: idMeal,
      name: strMeal,
      description: strInstructions,
      img: strMealThumb,
    };
  } catch (error) {
    console.log(error);
  }
};
