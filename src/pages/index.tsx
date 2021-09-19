import { Row, Col } from "antd";
import styled from "styled-components";
import RecipeCard from "../components/recipe/RecipeCard";
import { useAppContext } from "../AppContext"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-row {
    width: 70%;
    @media only screen and (max-width: 436px) {
      width: auto;
    }
    justify-content: center;
    margin-top: 70px;
  }
`;

const Header = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  text-align: center;
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  z-index: 11;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Home = () => {
  const { recipes } = useAppContext()
  console.log(recipes)
  return (
    <Container>
      <Header/>
      <Row>
        {recipes.map((r, index) => (
          <Col key={index}>
            <RecipeCard
              title={r.title}
              imageUrl={`https:${r.photo.url}`}
              recipeId={r.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
