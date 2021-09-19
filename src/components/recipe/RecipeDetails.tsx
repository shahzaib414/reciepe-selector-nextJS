import React from "react";
import { Recipe } from "../../types";
import Styled from "styled-components";
import Tag from "../common/Tag";

type Props = {
  recipe: Recipe;
};

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 65%;
    img {
        height: 492px;
        @media only screen and (max-width: 700px) {
            height: 292px;
        }
        border-radius: 5px 5px 0 0;
        object-fit: cover;
    }
    .details-wrapper {
        padding: 20px;
        h2 {
            font-size: 22px;
            font-weight: 400;
            margin: 0px;
            width: fit-content;
        }
        h3 {
            font-size: 18px;
            font-weight: 200;
            color: #706d6b;
            margin: 0px;
            padding-bottom: 10px;
            width: fit-content;
        }
        .tag-wrapper {
            display: flex;
            flex-direction: row;
        }
        .description-title {
            font-size: 18px;
            font-weight: 800;
            color: black;
            margin: 30px 0px 15px 0px;

        }
        .description {
            font-size: 16px;
            color: #706d6b;
            text-align: justify;
        }
        .chef {
            width: fit-content;
            float: right;
            margin-top: 20px;
            font-size: 16px;
            span {
                color: #5ab591;
            }
        }
    }
`;

const RecipeDetails = (props: Props) => {
  const titles = props.recipe.title.split("with");
  return (
    <Container>
      <img src={`https:${props.recipe.photo.url}`} />
      <div className="details-wrapper">
        <h2> {titles[0]} </h2>
        <h3> {`with ${titles[1]}`} </h3>
        <div className="tag-wrapper">
          {props.recipe.tags?.map((t) => (
            <Tag>{t.name?.toUpperCase()}</Tag>
          ))}
        </div>
        <h3 className="description-title">What's cooking</h3>
        <p className="description"> {props.recipe.description} </p>
        {props.recipe.chef?.name && (
          <p className="chef">
            Shared with you by: <span>{props.recipe.chef?.name}</span>{" "}
          </p>
        )}
      </div>
    </Container>
  );
};

export default RecipeDetails;
