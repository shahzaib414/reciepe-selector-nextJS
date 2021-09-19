import React from "react";
import { Recipe } from "../../types";
import Styled from "styled-components";
import Tag from "../common/Tag";

type Props = {
  recipe: Recipe;
};

const Container = Styled.div`
    display: flex;
    flex-direction: col;
    background-color: white;
    img {
        border-radius: 5px 5px 0 0;
    }
    h2 {
        font-size: 22px;
        font-weight: 400;
        margin: 0px;
        padding-left: 10px;
        padding-top: 10px;
        width: fit-content;
    }
    h3 {
        font-size: 18px;
        color: #706d6b;
        margin: 0px;
        padding-left: 10px;
        padding-bottom: 10px;
        width: fit-content;
    }
`;

export default (props: Props) => {

  return (
    <Container>
      <img src="https://images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg" />
      <h2> Crispy Parmesan Chicken </h2>
      <h3> with Roasted Broccolini </h3>
      <Tag>Low CARB</Tag>
    </Container>
  );
};
