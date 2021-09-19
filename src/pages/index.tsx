import type { InferGetServerSidePropsType } from "next";
import { Row, Col } from "antd";
import styled from "styled-components";
import RecipeCard from "../components/recipe/RecipeCard";
import { GetServerSideProps } from 'next'
import { fetchRecipes } from "../services";
import { ContentfulApiResponse, Recipe } from "../types";

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

const Home = ({ recipes }: { recipes: Recipe[] }) => {
  const onClick = (id: string) => {
    // Todo: redirect to details view page
  };
  return (
    <Container>
      <Header/>
      <Row>
        {recipes.map((r, index) => (
          <Col>
            <RecipeCard
              key={index}
              title={r.title}
              imageUrl={`https:${r.photo.url}`}
              recipeId={r.id}
              onClick={onClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const entries: ContentfulApiResponse<Recipe> = await fetchRecipes();

  const entryTags = new Map();

  // To perform iteration in O(n)^2
  entries.includes?.Entry.forEach((entry) => {
    if (entry.sys.contentType.sys.id === "tag") {
      entryTags.set(entry.sys.contentType.sys.id, entry.fields.name);
    }
  });

  const recipes: Recipe[] = entries.items.map((entryItem) => {
    const tags = entryItem.fields.tags?.map((tag) => {
      return {
        ...tag,
        name: entries.includes?.Entry.find(
          (entry) => entry.sys.id === tag.sys.id
        )?.fields.name,
      };
    });

    return {
      ...entryItem.fields,
      ...(entryItem.fields.chef && {
        chef: {
          ...entryItem.fields.chef,
          name: entries.includes?.Entry.find(
            (e) => e.sys.contentType.sys.id === entryItem.fields.chef?.sys.id
          )?.fields.name || '',
        },
      }),
      id: entryItem.sys.id,
      ...(entryItem.fields.tags && { tags: tags}),
      photo: {
        ...entryItem.fields.photo,
        url: entries.includes?.Asset.find(
          (asset) => asset.sys.id === entryItem.fields.photo.sys.id
        )?.fields.file.url,
      },
    };
  });
  return { props: { recipes } };
};

export default Home;
