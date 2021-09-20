import { Row, Col } from "antd";
import styled from "styled-components";
import RecipeCard from "../components/recipe/RecipeCard";
import Header from "../layout/Header";
import { useAppContext } from "../AppContext";
import { getUrl } from "../utils";

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

const Home = () => {
  const { recipes } = useAppContext();
  return (
    <Container>
      <Header />
      <Row>
        {recipes.map((r, index) => (
          <Col key={index}>
            <RecipeCard
              title={r.title}
              imageUrl={getUrl(r.photo.url)}
              recipeId={r.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
