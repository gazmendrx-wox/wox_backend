/**
 * DETYRA:
 *
 * Nje page e cila shfrytezon useEffect per fetching of data nga https://dummyjson.com/docs
 *
 * endpoint sipas zgjedhjes juaj - shembull, Products, Carts, Recipes etj
 *
 * Kerkesa kryesore e detyres eshte demonstrimi i useEffect, edhe Atomic
 * design principles per ndarjen e komponentave.
 *
 */

import Recipes from "@/components/Recipes";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const PageUseEffectHomework = () => {
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    const getRecipes = async () => {
      try {
        fetch("https://dummyjson.com/recipes")
          .then((res) => res.json())
          .then((data) => setRecipes(data.recipes));
      } catch (error) {
        console.error("Error to load data");
      }
    };

    getRecipes();
  }, []);

  return (
    <>
      {recipes && (
        <div className="container-fluid p-5">
          <Recipes recipes={recipes} />
        </div>
      )}{" "}
    </>
  );
};

export default PageUseEffectHomework;
