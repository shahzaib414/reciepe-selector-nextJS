import React from "react";
import { render, screen } from "@testing-library/react";
import RecipeCard from "./RecipeCard";
import { getTitles } from "../../utils";

describe("RecipeCard", () => {
  const defaultData = {
    title: "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
    imageUrl:
      "https://images.ctfassets.net/kk2bw5ojx476/5mFyTozvSoyE0Mqseoos86/fb88f4302cfd184492e548cde11a2555/SKU1479_Hero_077-71d8a07ff8e79abcb0e6c0ebf0f3b69c.jpg",
    recipeId: "437eO3ORCME46i02SeCW46",
  };

  it("Should render component", () => {
    const { container } = render(<RecipeCard {...defaultData} />);
    expect(container).not.toBe(null);
  });

  it("Should render all details in component", () => {
    const {title, subTitle} = getTitles(defaultData.title);
    const { container } = render(<RecipeCard {...defaultData} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultData.imageUrl)
    expect(container.querySelector("[data-testid=title]")).toHaveTextContent(title)
    expect(container.querySelector("[data-testid=sub-title]")).toHaveTextContent(subTitle)
  })
});
