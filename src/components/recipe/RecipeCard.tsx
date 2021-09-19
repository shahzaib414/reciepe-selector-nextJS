import React from "react";
import Styled from "styled-components";
import { Image } from "antd";

type Props = {
  recipeId: string;
  title: string;
  imageUrl: string;
  onClick: (id: string) => void;
};

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    width: 436px;
    background-color: white;
    border-radius: 5px;
    margin: 10px;
    @media only screen and (max-width: 436px) {
        width: auto
    }
    .ant-image-img {
        border-radius: 5px 5px 0 0;
        cursor: pointer;
    }
    h2 {
        font-size: 20px;
        font-weight: 400;
        margin: 0px;
        padding-left: 10px;
        padding-top: 10px;
        cursor: pointer;
        width: fit-content;
    }
    h3 {
        font-size: 14px;
        color: #706d6b;
        margin: 0px;
        padding-left: 10px;
        padding-bottom: 10px;
        cursor: pointer;
        width: fit-content;
    }
    h2:hover,
    h3:hover {
        color: #5ab591;
    }
`;

export default  (props: Props) => {
  const titles = props.title.split("with");
  return (
    <Card>
      <Image
        src={props.imageUrl}
        preview={false}
        onClick={() => props.onClick(props.recipeId)}
      />
      <h2 onClick={() => props.onClick(props.recipeId)}> {titles[0]} </h2>
      <h3 onClick={() => props.onClick(props.recipeId)}>
        {`with ${titles[1]}`}
      </h3>
    </Card>
  );
};
