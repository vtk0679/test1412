import { useEffect, useState } from "react";
import { Switch, Route } from "react-router";

import { Header } from "components/Header";
import { Modal } from "components/Modal";
import { RandomRecipe } from "views/RandomRecipe";
import { Favorites } from "views/Favorites";

import { apiGetRecipe } from "services/apiService";

function App() {
  const [meals, setMeals] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchNewRecipe();

    const savedMeals = JSON.parse(localStorage.getItem("meals"));
    if (savedMeals) {
      setMeals(savedMeals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("meals", JSON.stringify(meals));
  }, [meals]);

  const fetchNewRecipe = () => {
    apiGetRecipe().then((recipe) => setRecipe(recipe));
  };

  const onLike = (recipe) => {
    if (meals.some((meal) => meal.id === recipe.id)) return;
    setMeals((meals) => [...meals, recipe]);
  };

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleAdd = (meal) => {
    setMeals((meals) => [...meals, meal]);
  };

  return (
    <div className="App">
      <Header onOpenModal={handleClickOpen}></Header>
      {isModalOpen && (
        <Modal handleClose={handleClose} handleAdd={handleAdd}></Modal>
      )}

      <Switch>
        <Route path="/" exact>
          <RandomRecipe
            onSkip={fetchNewRecipe}
            onLike={onLike}
            recipe={recipe}
          ></RandomRecipe>
        </Route>
        <Route path="/favorites">
          <Favorites meals={meals}></Favorites>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
