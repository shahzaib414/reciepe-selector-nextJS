import { useRouter } from "next/router";
import Styled from "styled-components";
import { useAppContext } from "../../AppContext";
import RecipeDetails from "../../components/recipe/RecipeDetails";
import Header from "../../layout/Header";

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
`;

const Recipe = () => {
  const router = useRouter();
  const { recipes } = useAppContext();

  const { id } = router.query;
  const recipe = recipes.find((r) => r.id === id);
  return (
    <Container>
      <Header />
      {recipe ? <RecipeDetails recipe={recipe} /> : <div> Not found </div>}
    </Container>
  );
};

export default Recipe