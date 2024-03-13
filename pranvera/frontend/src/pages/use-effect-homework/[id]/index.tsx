import RecipeDetails from "@/components/RecipeDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PageRecipeDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [recipe, setRecipe] = useState();

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipe");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    getRecipe();
  }, []);

  return (
    <>
      {recipe && (
        <>
          <RecipeDetails recipe={recipe} />
        </>
      )}
    </>
  );
};

export default PageRecipeDetails;
